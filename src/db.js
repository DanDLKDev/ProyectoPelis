const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'LimoneroDelFondo4281#',
  database: 'pelicula_db'
});

db.connect((err) => {
  if (err) {
    console.error('Error conectando a MySQL:', err.stack);
    return;
  }
  console.log('Conectado a MySQL como ID:', db.threadId);
});

module.exports = db;
