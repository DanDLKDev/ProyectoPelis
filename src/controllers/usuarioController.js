/*const connection = require('../db');

exports.obtenerUsuarios = (req, res) => {
    connection.query('SELECT * FROM usuarios', (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(results);
    });
};

exports.crearUsuario = (req, res) => {
    const { nombre, email, password, rol_id } = req.body;
    connection.query('INSERT INTO usuarios (nombre, email, password, rol_id) VALUES (?, ?, ?, ?)',
        [nombre, email, password, rol_id], (err, results) => {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.status(201).send('Usuario creado');
        });
};

exports.obtenerUsuarioPorId = (req, res) => {
    const { id } = req.params;
    connection.query('SELECT * FROM usuarios WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(results[0]);
    });
};

exports.actualizarUsuario = (req, res) => {
    const { id } = req.params;
    const { nombre, email, password, rol_id } = req.body;
    connection.query('UPDATE usuarios SET nombre = ?, email = ?, password = ?, rol_id = ? WHERE id = ?',
        [nombre, email, password, rol_id, id], (err, results) => {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.send('Usuario actualizado');
        });
};

exports.eliminarUsuario = (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM usuarios WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.send('Usuario eliminado');
    });
};
*/


const db = require('../db');

// Obtener todos los usuarios
exports.obtenerUsuarios = (req, res) => {
  db.query('SELECT * FROM usuarios', (err, results) => {
    if (err) {
      console.error('Error al obtener usuarios:', err.stack);
      return res.status(500).send('Error al obtener usuarios');
    }
    res.json(results);
  });
};

// Crear usuario
exports.crearUsuario = (req, res) => {
  const { nombre, email, password, rol_id } = req.body;
  db.query('INSERT INTO usuarios (nombre, email, password, rol_id) VALUES (?, ?, ?, ?)',
    [nombre, email, password, rol_id], (err, results) => {
      if (err) {
        console.error('Error al crear usuario:', err.stack);
        res.status(500).send('Error al crear usuario');
        return;
      }
      res.status(201).send('Usuario creado');
    });
};

// Obtener usuario por ID
exports.obtenerUsuarioPorId = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM usuarios WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error('Error al obtener usuario:', err.stack);
      return res.status(500).send('Error al obtener usuario');
    }
    res.json(results[0]);
  });
};

// Actualizar usuario
exports.actualizarUsuario = (req, res) => {
  const { id } = req.params;
  const { nombre, email, password, rol_id } = req.body;
  db.query('UPDATE usuarios SET nombre = ?, email = ?, password = ?, rol_id = ? WHERE id = ?',
    [nombre, email, password, rol_id, id], (err, results) => {
      if (err) {
        console.error('Error al actualizar usuario:', err.stack);
        return res.status(500).send('Error al actualizar usuario');
      }
      res.send('Usuario actualizado');
    });
};

// Eliminar usuario
exports.eliminarUsuario = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM usuarios WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error('Error al eliminar usuario:', err.stack);
      return res.status(500).send('Error al eliminar usuario');
    }
    res.send('Usuario eliminado');
  });
};
