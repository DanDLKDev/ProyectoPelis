const mysql = require('mysql');
const config = require('./config.js');  // Importa el archivo config.js

// Crea la conexión a la base de datos
const db = mysql.createConnection({
  host: config.DB_HOST,
  user: config.DB_USER,
  password: config.DB_PASSWORD,
  database: config.DB_NAME,
  port: config.DB_PORT
});


db.connect((err) => {
  if (err) {
    console.error('Error conectando a MySQL:', err.stack);
    return;
  }
  console.log('Conectado a MySQL como ID:', db.threadId);
});

module.exports = db;
