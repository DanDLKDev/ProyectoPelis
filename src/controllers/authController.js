const connection = require('../db');
const bcrypt = require('bcryptjs');

exports.login = (req, res) => {
    const { email, contrasena } = req.body;
    connection.query('SELECT * FROM usuarios WHERE email = ?', [email], async (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }

        if (results.length === 0) {
            res.status(401).send('Usuario no encontrado');
            return;
        }

        const usuario = results[0];
        const esContrasenaValida = await bcrypt.compare(contrasena, usuario.contrasena);

        if (!esContrasenaValida) {
            res.status(401).send('Contraseña incorrecta');
            return;
        }

        // Si las credenciales son válidas, devolver información de usuario sin la contraseña
        delete usuario.contrasena;
        res.json(usuario);
    });
};

exports.registro = (req, res) => {
    const { nombre, email, contrasena, rol_id } = req.body;

    // Hashear la contraseña antes de almacenarla en la base de datos
    bcrypt.hash(contrasena, 10, (err, hashedPassword) => {
        if (err) {
            res.status(500).send(err);
            return;
        }

        connection.query('INSERT INTO usuarios (nombre, email, contrasena, rol_id) VALUES (?, ?, ?, ?)',
            [nombre, email, hashedPassword, rol_id], (err, results) => {
                if (err) {
                    res.status(500).send(err);
                    return;
                }
                res.status(201).send('Usuario registrado');
            });
    });
};
