const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const motoScheme = new Schema({
        _id: Object,
        marca: String,
        modelo: String,
        cilindrada: String,
        dimensiones: String,
        frenos: String,
        motor: String,
        neumaticos: String,
        peso: String,
        tanque : String,
        precio : String,
        img : String,
        suspensiondelantera: String,
        suspensiontrasera: String,
        top: Boolean,
        electricidad: String,
        fotos : Array,
        disponible: Boolean,
        img_preview: String

    });

const Moto = mongoose.model('Moto', motoScheme)

module.exports = Moto;