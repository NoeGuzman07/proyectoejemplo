const connection = require('../database/database');

//METODO PARA INICIAR SESION EN EL SISTEMA
exports.iniciarSesion = (req, res) => {
    const correo_electronico = req.correo_electronico;
    const contrasena = req.contrasena;
    connection.query('SELECT * usuario WHERE correo_electronico = ? AND constrasena = ?', [{ correo_electronico: correo_electronico, contrasena: contrasena }], (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/inicio-sesion');
        }
    })
}