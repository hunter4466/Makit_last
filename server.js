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
  connectionLimit: 1000,
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
app.all('/getData', (req, res) => {
  pool.getConnection((err, conn) => {
    const query = 'SELECT * FROM categoriaitems';
    conn.query(query, (error, lines) => {
      if (error) { throw error; }
      res.send({ data: lines[0].nombre });
      conn.release();
    });
  });
});

app.all('/getProducts', (req, res) => {
  pool.getConnection((err, conn) => {
    const query1 = 'SELECT * FROM categoriaitems';
    const query2 = 'SELECT * FROM categoriaproductos';
    const query3 = 'SELECT * FROM items';
    const query4 = 'SELECT * FROM productos';
    const query5 = 'SELECT * FROM productos_categoriaitems';
    conn.query(`${query1};${query2};${query3};${query4};${query5};`, (error, lines) => {
      if (error) { throw error; }
      res.send({
        data: {
          cat_items: lines[0],
          cat_prod: lines[1],
          items: lines[2],
          prod: lines[3],
          prod_cat_items: lines[4],
        },
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
app.listen('8080', () => {
  console.log('MakitApp Iniciated');
});
