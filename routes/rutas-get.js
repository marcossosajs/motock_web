const express = require('express');
const app = express();
const rutasGet = () =>{
    app.get('/', (req,res)=>{
        const request = req.body;
        console.log("entrando en inicio");
        res.sendFile(__dirname + '/public/index.html');
    });
}


module.exports = rutasGet();