const express = require('express');
const session = require('express-session');
const mysql = require('mysql');

const app = express();

/* ---------------------------USOS----------------------------------------*/
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(session({
  secret: 'token-muy-secreto', key: 'sid', resave: true, saveUninitialized: true,
}));
app.use(express.json());
app.use(express.urlencoded());

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
  req.session.user_id = '1';
  req.session.destroy();
  res.render('index');
});

/* ---------------------------API-------------------------*/
app.all('/getData', (req, res) => {
  pool.getConnection((err, conn) => {
    const query = 'SELECT * FROM categoriaitems';
    conn.query(query, (error, lines) => {
      if (error) { throw error; }
      res.send({ data: lines });
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
app.listen('3000', () => {
  console.log('MakitApp Iniciated');
});
