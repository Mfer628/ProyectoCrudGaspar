const express = require('express')
const conectarDB = require('./config/db');
const app = express();


//Definimos ruta principal

//Conectamos a la BD

conectarDB();
app.use(express.json());
app.use ('/api/productos',require('./routes/producto'))
/*
app.get('/', (req, res) => {
    res.send("Hola Mundo");
})
*/
app.listen(4000, () => {
    console.log("El servidor esta corriendo perfectamete");
})
