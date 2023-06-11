const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
        nombre:{
            type: String,
            required:true
        },
        
        categoria:{
            type: String,
            required:true
        },

        stock:{
            type: Number,
            required:true
        },
        ubicacion:{
            type: String,
            required:true
        },


        fecha_creacion:{
            type:Date,
            default:Date.now()
        }


});

module.exports=mongoose.model('Producto', ProductoSchema);