const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userScheme = new Schema({
        _id: Object,
        nombre: String,
        apellido: String,
        email: String,
        password: String,
        tipo: String,
        rut: String
    });

const Usuarios = mongoose.model('Usuarios', userScheme)

module.exports = Usuarios;