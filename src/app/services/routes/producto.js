//Rutas para producto
const express = require ('express')
const router =express.Router();
const productoController = require('../controllers/controler') 
//api/productos

router.post('/', productoController.crearProducto)

module.exports=router;