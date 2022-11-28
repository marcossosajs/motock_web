const mongoose = require('mongoose');
const dbConnect = ()=>{
    const DB_URI = process.env.mongoDB;
    mongoose.connect(DB_URI, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    },
    (err,res)=>{
        console.log("intentando conectarse a base de datos mongo")
        if(!err){
            console.log('conexion correcta a base datos')
        }else{
            console.log('error de conexion a base de datos');
        }
    }
    );
};

module.exports = dbConnect;