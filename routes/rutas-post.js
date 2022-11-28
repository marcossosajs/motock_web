const express = require('express');
const app = express();

const rutasPOST = () => {
    app.post('/topMotos', (req, res) => {
        let request = req.body;
        let data = {
            "comprobar": "si"
        }
        if (request.topMotos === "topMotos") {
            console.log("se accedio a topmotos");
            return res.send(data);
        } else {
            return console.log("no");
        }

    });
    app.post('/contacto', (req, res) => {
        let request = req.body;
        let data = {
            "comprobar": "si"
        }
        if (request.topMotos === "topMotos") {
            console.log("se accedio a topmotos");
            return res.send(data);
        } else {
            return console.log("no");
        }

    });
}

module.exports = rutasPOST();