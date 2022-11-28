require('dotenv').config();
/* dotenv aplicando en config del proyecto*/
const rutasGet = require('./routes/rutas-get');
// todas las rutas GET
const rutasPOST = require('./routes/rutas-post');
// todas las rutas POST
const express = require('express');
/* usando express en una constante express */
const app = express();
/* usando la funcion de express en constante app*/
const dbConnect = require('./mongoDB/mongo');
/* funcion de conexion a la base de datos de mongodb*/
const puerto = process.env.PORT;
/* usando puerto con variables de entorno .env*/
app.use(express.json());

app.use(express.static(__dirname + "/public"));
/* diciendole a express que mis archivos estaticos estan en public 
y que por ende, desde ahi sea el "/" inicio cuando busque
por defecto agarra el index.html como inicio*/


app.listen(puerto, () => {
    console.log(`server escuchando en puerto ${puerto}`);
});
/* puerto en el que se escucha el servidor*/
dbConnect();
/* conectandome a la base de datos mongodb, usando la funcion importada
de la carpeta mongoDB>mongo.js */