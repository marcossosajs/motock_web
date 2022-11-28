require('dotenv').config();
const { Console } = require('console');
const express = require('express');
const app = express();
const dbConnect = require('./mongoDB/mongo');
const puerto = process.env.PORT;
app.use(express.static(__dirname + "/public"));
app.listen(puerto, () =>{
    console.log(`server escuchando en puerto ${puerto}`);
});
dbConnect();