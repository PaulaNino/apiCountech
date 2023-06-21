const {Schema, model} = require('mongoose')

const DetalleDeVentaSchema = Schema({
    idVenta: {
        unique: [true,'Este venta ya esta relacionado a un detalle de venta, intente con una diferente'], 
        type: Number,
        required: [true, 'El idVenta es necesario']
    },
    cliente: {
        type: String,
        required: [true, 'El cliente es necesario']
    },
    contacto:{
        type: String,
        required: [true, 'El contacto del cliente es necesario']
    },
    ordenTrabajo: {
        type: Number,
        required: [true, 'La orden de trabajo es necesaria'],
        unique: [true, 'Esta orden de trabajo ya esta relacionada a una venta']
    },
    fechaOrdenTrabajo: {
        type: Date,
        required: [true, 'La fecha de la orden de trabajo es necesaria']
    },
    fechaRegistro: {//Fecha registro orden de trabajo
        type: Date,
        required: [true, 'La fecha de registro es necesaria']
    },
    fechaEntregaOrden: {
        type: Date,
        required: [true, 'La fecha de entrega de orden es necesaria']
    },
    observaciones: {
        type: String,
    },
    referencia: {
        type: Number,
        required: [true, 'La referencia es necesaria']
    },
    proceso:{
        type: Number,
        required: [true, 'El proceso es necesario']              
    },
    color: {
        type: Number,
        required: [true, 'El color es necesario']   
    },
    talla: {
        type: Number,
        required: [true, 'La talla es necesaria']   
    }


    
})

module.exports = model('detalleDeVenta', DetalleDeVentaSchema);