require('dotenv').config();
const bodyParser = require('body-parser');



const express = require('express');

const path = require('path');
const app = express();
const db = require('./db');

// Middleware para parsear JSON
app.use(express.json());

// Middleware para parsear JSON
app.use(bodyParser.json());

// Middleware para servir archivos estáticos desde el directorio frontend
app.use(express.static(path.join(__dirname, 'frontend')));

// Importar y usar las rutas
const authRoutes = require('./routes/auth');
const peliculaRoutes = require('./routes/peliculas');
const usuarioRoutes = require('./routes/usuarios');
const rolRoutes = require('./routes/roles');
const categoriaRoutes = require('./routes/categorias');
const alquilerRoutes = require('./routes/alquileres');

app.use('/auth', authRoutes);
app.use('/peliculas', peliculaRoutes);
app.use('/usuarios', usuarioRoutes);
app.use('/roles', rolRoutes);
app.use('/categorias', categoriaRoutes);
app.use('/alquileres', alquilerRoutes);

// Ruta de prueba para verificar que el servidor está corriendo
app.get('/', (req, res) => {
  res.send('Servidor funcionando...');
});

// Ruta para crear usuario
app.post('/usuarios', (req, res) => {
  let usuario = { nombre: req.body.nombre, email: req.body.email, contrasena: req.body.contrasena, rol_id: req.body.rol_id };
  let sql = 'INSERT INTO usuarios SET ?';
  db.query(sql, usuario, (err, result) => {
    if (err) {
      console.error('Error al crear usuario:', err.stack);
      res.status(500).send('Error al crear usuario');
      return;
    }
    res.send('Usuario agregado...');
  });
});

// Puerto en el que el servidor escucha
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
