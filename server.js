const express = require('express');
const session = require('express-session');
const mysql = require('mysql');
const path = require('path');
const cors = require('cors');

const app = express();

/* ---------------------------USOS----------------------------------------*/
app.set('view engine', 'ejs');
app.set('views', './build');
app.use(session({
  secret: 'token-muy-secreto', key: 'sid', resave: true, saveUninitialized: true,
}));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(`${__dirname}/build`));
app.use(cors({
  origin: '*',
}));
/* ---------------------------CONEXIONES----------------------------------------*/
// var pool = mysql.createPool({
//     connectionLimit: 1000,
//     host:'localhost',
//     user: 'ps6dng7z1bo2',
//     password: 'jf7l2p93lI',
//     database: 'makit_software',
//     multipleStatements: 'true'})

const pool = mysql.createPool({
  connectionLimit: 10,
  host: '72.167.67.76',
  user: 'makit_nueva',
  password: 'jf7l2p93li',
  database: 'makit_software',
  multipleStatements: 'true',
});

/* ---------------------------MAILER----------------------------------------*
/*---------------------------ROUTES-------------------------*/
app.get('/shop', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/build/index.html`));
});
app.get('/store', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/build/index.html`));
});
app.get('/home', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/build/index.html`));
});
/* ---------------------------API-------------------------*/
app.all('/getcategories', (req, res) => {
  pool.getConnection((err, conn) => {
    const query = 'SELECT * FROM categoriaproductos';
    conn.query(query, (error, lines) => {
      if (error) { throw error; }
      res.send(lines);
      conn.release();
    });
  });
});

app.all('/switch_order_to_kitchen/:id', (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;
    const query = `CALL move_to_kitchen(${req.params.id})`;
    conn.query(query, (error, lines) => {
      if (error) { throw error; }
      res.send({ Message: 'Moved to kitchen' });
      conn.release();
    });
  });
});

app.all('/switch_order_to_ensamble/:id', (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;
    const query = `CALL move_to_ensamble(${req.params.id})`;
    conn.query(query, (error, lines) => {
      if (error) { throw error; }
      res.send({ Message: 'Moved to ensamble' });
      conn.release();
    });
  });
});

app.all('/switch_order_to_delivery/:id', (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;
    const query = `CALL move_to_delivered(${req.params.id})`;
    conn.query(query, (error, lines) => {
      if (error) { throw error; }
      res.send({ Message: 'Moved to delivery' });
      conn.release();
    });
  });
});

app.all('/getProdWithId/:id', (req, res) => {
  pool.getConnection((err, conn) => {
    const query = `SELECT * FROM productos WHERE idcategoria = ${req.params.id}`;
    conn.query(query, (error, lines) => {
      if (error) { throw error; }
      res.send(lines);
      conn.release();
    });
  });
});

app.all('/send_order_to_db', (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;
    const date = new Date();
    const query = `INSERT INTO ordenes (fecha_orden, hora_orden, order_detail) VALUES ('${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}','${date.getTime()}','${req.body.info}')`;
    conn.query(query, (error) => {
      if (error) throw error;
      res.send({ resolve: 'The order has been send correctly' });
      conn.release();
    });
  });
});

app.all('/getlastweekorders', (req, res) => {
  pool.getConnection((err, conn) => {
    const date = new Date();
    const distance = date.getTime() - 604800000;
    const query = `SELECT * FROM ordenes WHERE hora_orden > '${distance}'`;
    conn.query(query, (error, lines) => {
      if (error) { throw error; }
      res.send(lines);
      conn.release();
    });
  });
});

app.all('/getlastweeklength', (req, res) => {
  pool.getConnection((err, conn) => {
    const date = new Date();
    const distance = date.getTime() - 604800000;
    const query = `SELECT * FROM ordenes WHERE hora_orden > '${distance}'`;
    conn.query(query, (error, lines) => {
      if (error) { throw error; }
      res.send({ size: lines.length });
      conn.release();
    });
  });
});

app.all('/updateKitchenState', (req, res) => {
  pool.getConnection((err, conn) => {
    const query = `UPDATE ordenes SET kitchen_state = '${req.body.state}' WHERE idordenes = '${req.body.id}'`;
    conn.query(query, (error, lines) => {
      if (error) { throw error; }
      res.send(lines);
      conn.release();
    });
  });
});

app.all('/updateEnsambleState', (req, res) => {
  pool.getConnection((err, conn) => {
    const query = `UPDATE ordenes SET ensamble_state = '${req.body.state}' WHERE idordenes = '${req.body.id}'`;
    conn.query(query, (error, lines) => {
      if (error) { throw error; }
      res.send(lines);
      conn.release();
    });
  });
});

app.all('/getItemWithId/:id', (req, res) => {
  let result = [];
  const responseObj = [];
  pool.getConnection((err, conn) => {
    const query = `SELECT * FROM productos_categoriaitems WHERE idproductos = ${req.params.id} AND cantidad > 0`;
    conn.query(query, (error, lines) => {
      if (error) { throw error; }
      result = lines;
      let index = 0;
      result.forEach((element) => {
        const innerquery = `SELECT * FROM categoriaitems WHERE idcategoriaitems = ${element.idcategoriaitems}`;
        const innerquery2 = `SELECT * FROM items WHERE idcategoriaitems = ${element.idcategoriaitems}`;
        conn.query(`${innerquery};${innerquery2}`, [0, 1], (innererror, innerlines) => {
          if (innererror) { throw innererror; }
          const innerresponse = innerlines[0];
          const innerresponse2 = innerlines[1];
          responseObj.push({
            name: innerresponse[0].nombre,
            indexes: lines[index],
            content: innerresponse2,
            completed: false,
          });
          index += 1;
          if (index === lines.length) {
            res.send(responseObj);
          }
        });
      });
      conn.release();
    });
  });
});
/* --------------- id generator --------------*/
const tokenGenerator = () => {
  const guid = () => {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    return `${s4() + s4()}${s4()}${s4()}${s4()}${s4()}${s4()}${s4()}`;
  };
  const newKey = guid();
  return newKey;
};
/* ------------ body validate ---------------- */
const checkbody = (body) => {
  const acceptedkeys = ['name', 'lastname', 'birthdate', 'auth', 'foodpref'];
  const keys = Object.keys(body);
  let validation = true;
  const errortypes = [];
  const errorcoll = [];
  keys.forEach((e) => {
    if (!acceptedkeys.includes(e)) {
      errortypes.push(e, ', ');
      validation = false;
    }
  });
  if (!validation) {
    errorcoll.push(`${errortypes.reduce((a, b) => a + b)} is/are not valid entry/entries.`);
  }
  if (keys.includes('birthdate')) {
    const dateval = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(body.birthdate);
    if (!dateval) {
      validation = false;
      errorcoll.push(`${body.birthdate} is not a valid date, date must be in the following format YYYY-MM-DD`);
    }
  }
  if (keys.includes('auth')) {
    const authval = (body.auth === 'true' || body.auth === 'false');
    if (!authval) {
      validation = false;
      errorcoll.push(`${body.auth} is not a valid auth value, auth must be true or false (boolean)`);
    }
  }
  if (!validation) {
    const returnobj = {};
    let count = 1;
    errorcoll.forEach((e) => {
      returnobj[`Error ${count}`] = e;
      count += 1;
    });
    return { check: false, errors: returnobj };
  }
  const body2 = body;
  if (body2.auth === 'true') {
    body2.auth = 1;
  } else if (body2.auth === 'false') {
    body2.auth = 0;
  }
  return { check: true, values: body2 };
};

/* ---------- OESCHLE API ------------------- */

app.post('/user', (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) { conn.release(); throw err; }
    const token = tokenGenerator();
    const query = `INSERT INTO oeschle_test_users (auth_token) VALUES ('${token}')`;
    conn.query(query, (error) => {
      if (error) {
        res.send({ state: 'Error no token was created' });
        conn.release();
        throw error;
      }
      res.send({ state: 'Token successfully created', token });
      conn.release();
    });
  });
});

app.post('/data/:id', (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) { conn.release(); throw err; }
    const query = `SELECT * FROM oeschle_test_users WHERE auth_token = '${req.params.id}'`;
    conn.query(query, (error, lines) => {
      if (error) { conn.release(); throw error; }
      if (lines.length > 0) {
        const autho = checkbody(req.body);
        if (autho.check) {
          const newQuery = `INSERT INTO oeschle_test_data (user_id, name, lastname, birthdate, auth, foodpref) VALUES ('${lines[0].id}', '${autho.values.name}', '${autho.values.lastname}', '${autho.values.birthdate}', '${autho.values.auth}', '${autho.values.foodpref}')`;
          conn.query(newQuery, (error2) => {
            if (error2) { conn.release(); throw error2; }
            res.send({ Success: 'Data has been stored correctly!' });
            conn.release();
          });
        } else {
          res.send(autho.errors);
          conn.release();
        }
      } else {
        conn.release();
        res.send({ error: 'Provided token is not valid' });
      }
    });
  });
});

app.get('/data/:id', (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) { conn.release(); throw err; }
    const query = `SELECT * FROM oeschle_test_users WHERE auth_token = '${req.params.id}'`;
    conn.query(query, (error, lines) => {
      if (error) { conn.release(); throw error; }
      if (lines.length > 0) {
        const newQuery = `SELECT * FROM oeschle_test_data WHERE user_id = '${lines[0].id}'`;
        conn.query(newQuery, (error2, lines2) => {
          if (error2) { conn.release(); throw error2; }
          res.send(lines2);
          conn.release();
        });
      } else {
        conn.release();
        res.send({ error: 'Provided token is not valid' });
      }
    });
  });
});

/* ---------------------------- */

/* ------------------ANEXOS---------------------*/
app.all('/carta', (req, res) => {
  res.render('carta');
});
app.all('/links', (req, res) => {
  res.render('links');
});
/* ---------------------PPORTS-------------------*/
const PORT = '8080';
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('MakitApp API Listening in port', PORT, '...');
});
