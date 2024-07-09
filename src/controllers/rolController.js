const connection = require('../db');

exports.obtenerRoles = (req, res) => {
    connection.query('SELECT * FROM roles', (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(results);
    });
};

exports.crearRol = (req, res) => {
    const { nombre } = req.body;
    connection.query('INSERT INTO roles (nombre) VALUES (?)',
        [nombre], (err, results) => {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.status(201).send('Rol creado');
        });
};

exports.obtenerRolPorId = (req, res) => {
    const { id } = req.params;
    connection.query('SELECT * FROM roles WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(results[0]);
    });
};

exports.actualizarRol = (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
    connection.query('UPDATE roles SET nombre = ? WHERE id = ?',
        [nombre, id], (err, results) => {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.send('Rol actualizado');
        });
};

exports.eliminarRol = (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM roles WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.send('Rol eliminado');
    });
};
