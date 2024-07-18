const connection = require('../db');

exports.crearAlquiler = (req, res) => {
    const { usuario_id, pelicula_id, fecha_alquiler, fecha_devolucion } = req.body;
    const sql = 'INSERT INTO alquileres (usuario_id, pelicula_id, fecha_alquiler, fecha_devolucion) VALUES (?, ?, ?, ?)';
    connection.query(sql, [usuario_id, pelicula_id, fecha_alquiler, fecha_devolucion], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Alquiler creado', id: results.insertId });
    });
};

exports.obtenerAlquileres = (req, res) => {
    const sql = 'SELECT * FROM alquileres';
    connection.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.obtenerAlquilerPorId = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM alquileres WHERE id = ?';
    connection.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results[0]);
    });
};

exports.actualizarAlquiler = (req, res) => {
    const { id } = req.params;
    const { usuario_id, pelicula_id, fecha_alquiler, fecha_devolucion, valor_alquiler } = req.body;
    const sql = 'UPDATE alquileres SET usuario_id = ?, pelicula_id = ?, fecha_alquiler = ?, fecha_devolucion = ?, valor_alquiler = ? WHERE id = ?';
    connection.query(sql, [usuario_id, pelicula_id, fecha_alquiler, fecha_devolucion, valor_alquiler, id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Alquiler actualizado' });
    });
};

exports.eliminarAlquiler = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM alquileres WHERE id = ?';
    connection.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Alquiler eliminado' });
    });
};
