const connection = require('../db');

exports.obtenerCategorias = (req, res) => {
    connection.query('SELECT * FROM categorias', (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(results);
    });
};

exports.crearCategoria = (req, res) => {
    const { nombre } = req.body;
    connection.query('INSERT INTO categorias (nombre) VALUES (?)',
        [nombre], (err, results) => {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.status(201).send('Categoría creada');
        });
};

exports.obtenerCategoriaPorId = (req, res) => {
    const { id } = req.params;
    connection.query('SELECT * FROM categorias WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(results[0]);
    });
};

exports.actualizarCategoria = (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
    connection.query('UPDATE categorias SET nombre = ? WHERE id = ?',
        [nombre, id], (err, results) => {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.send('Categoría actualizada');
        });
};

exports.eliminarCategoria = (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM categorias WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.send('Categoría eliminada');
    });
};
