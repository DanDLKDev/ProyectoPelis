const connection = require('../db');

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
    const { nombre, email, contrasena, rol_id } = req.body;
    connection.query('INSERT INTO usuarios (nombre, email, contrasena, rol_id) VALUES (?, ?, ?, ?)',
        [nombre, email, contrasena, rol_id], (err, results) => {
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
    const { nombre, email, contrasena, rol_id } = req.body;
    connection.query('UPDATE usuarios SET nombre = ?, email = ?, contrasena = ?, rol_id = ? WHERE id = ?',
        [nombre, email, contrasena, rol_id, id], (err, results) => {
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
