const express = require('express'),
config = require('./config/config'),
//multer = require('multer'), // dependencia para recibir datos de formularios
//upload = multer()
app = express(),
router = require('./routes/routes')

app
.set('port', (process.env.PORT))
// Para parsear application/xwww-form-urlencoded
.use(express.urlencoded({extend: false}))
// Para parsear application/json
.use(express.json())
// Para parsear multipart/form-data
//.use(upload.array())
.use((req, res, next) =>{
    /* Permitir peticiones desde otros dominios */
    res.header('Access-Control-Allow-Origin','*'); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    /* Permitir peticiones odos los verbos REST */
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS")
    next();
})
.use('/api', router)

module.exports = app