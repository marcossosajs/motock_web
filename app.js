require('dotenv').config();
const mongoose = require('mongoose')
/* dotenv aplicando en config del proyecto*/
const Moto = require('./mongoDB/models/moto.js');

const express = require('express');
/* usando express en una constante express */
const app = express();
/* usando la funcion de express en constante app*/
const router = express.Router();
const dbConnect = require('./mongoDB/mongo');
const { response } = require('express');
/* funcion de conexion a la base de datos de mongodb*/
/* puerto en el que se escucha el servidor*/
const puerto = process.env.PORT;
/* usando puerto con variables de entorno .env*/
app.use(express.json());

app.get('/', (req, res) => {
    const request = req.body;
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/s', (req, res) => {
    const request = req.body;
    res.sendFile(__dirname + '/public/index.html');
});
app.post('/topMotos', async (req, res) => {
    try {
        if (req.body.topMotos === "si" ){
            const motos = await Moto.find({electricidad: "no"})
            res.send(motos);
        }

    } catch (error) {
        console.log(error);
    }


});
app.use(express.static(__dirname + "/public"));
/* diciendole a express que mis archivos estaticos estan en public 
y que por ende, desde ahi sea el "/" inicio cuando busque
por defecto agarra el index.html como inicio*/




app.listen(puerto, () => {
    console.log(`server escuchando en puerto ${puerto}`);
});
