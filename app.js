require('dotenv').config();
const express = require('express');
const app = express();
const puerto = process.env.PORT;

app.listen(puerto, ()=>{
    console.log(`server escuchando en puerto ${puerto}`);
});
