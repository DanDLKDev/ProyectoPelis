/*const connection = require('../db');

exports.obtenerPeliculas = (req, res) => {
    connection.query('SELECT * FROM peliculas', (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(results);
    });
};

exports.crearPelicula = (req, res) => {
    const { titulo, descripcion, categoria_id } = req.body;
    connection.query('INSERT INTO peliculas (titulo, descripcion, categoria_id) VALUES (?, ?, ?)',
        [titulo, descripcion, categoria_id], (err, results) => {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.status(201).send('Película creada');
        });
};

exports.obtenerPeliculaPorId = (req, res) => {
    const { id } = req.params;
    connection.query('SELECT * FROM peliculas WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(results[0]);
    });
};

exports.actualizarPelicula = (req, res) => {
    const { id } = req.params;
    const { titulo, descripcion, categoria_id } = req.body;
    connection.query('UPDATE peliculas SET titulo = ?, descripcion = ?, categoria_id = ? WHERE id = ?',
        [titulo, descripcion, categoria_id, id], (err, results) => {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.send('Película actualizada');
        });
};

exports.eliminarPelicula = (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM peliculas WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.send('Película eliminada');
    });
};*/


const connection = require('../db');

exports.obtenerPeliculas = (req, res) => {
    connection.query('SELECT * FROM peliculas', (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(results);
    });
};

exports.crearPelicula = (req, res) => {
    const { titulo, descripcion, categoria_id } = req.body;
    connection.query('INSERT INTO peliculas (titulo, descripcion, categoria_id) VALUES (?, ?, ?)',
        [titulo, descripcion, categoria_id], (err, results) => {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.status(201).send('Película creada');
        });
};

exports.obtenerPeliculaPorId = (req, res) => {
    const { id } = req.params;
    connection.query('SELECT * FROM peliculas WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(results[0]);
    });
};

exports.actualizarPelicula = (req, res) => {
    const { id } = req.params;
    const { titulo, descripcion, categoria_id } = req.body;
    connection.query('UPDATE peliculas SET titulo = ?, descripcion = ?, categoria_id = ? WHERE id = ?',
        [titulo, descripcion, categoria_id, id], (err, results) => {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.send('Película actualizada');
        });
};

exports.eliminarPelicula = (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM peliculas WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.send('Película eliminada');
    });
};

