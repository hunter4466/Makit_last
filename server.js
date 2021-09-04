const express = require('express');
const session = require('express-session');
const mysql = require('mysql');

const app = express();

/* ---------------------------USOS----------------------------------------*/
app.set('view engine', 'ejs');
app.set('views', './build');
app.use(session({
  secret: 'token-muy-secreto', key: 'sid', resave: true, saveUninitialized: true,
}));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('build'));
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
app.all('/', (req, res) => {
  res.sendFile('index.html');
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

/* ------------------ANEXOS---------------------*/
app.all('/carta', (req, res) => {
  res.render('cartamakit');
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
