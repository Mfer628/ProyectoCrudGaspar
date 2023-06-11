const producto = require("../models/producto");



exports.crearProducto=async(req,res) => {
 try {
    let product;

        // Creamos nuestro producto
     product= new producto(req.body)
    await product.save();
    res.send(product)
 } catch (error) {
    console.log(error)
    res.status(500).send("Error")
 }
}