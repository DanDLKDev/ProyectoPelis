


const mysql = require('mysql2');
const config = require('./config');  // Asegúrate de que la ruta sea correcta

// Crea el pool de conexiones
const db = mysql.createPool({
  connectionLimit: 10,
  host: config.DB_HOST,
  user: config.DB_USER,
  password: config.DB_PASSWORD,
  database: config.DB_NAME,
  port: config.DB_PORT
});

// Verificar conexión
db.getConnection((err, connection) => {
  if (err) {
    console.error('Error al conectar con la base de datos:', err.stack);
    return;
  }
  console.log('Conectado a la base de datos como ID ' + connection.threadId);
  connection.release();
});

// Exporta el pool de conexiones
module.exports = db;