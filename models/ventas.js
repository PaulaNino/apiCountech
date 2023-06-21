const {Schema, model} = require('mongoose')

const VentasSchema = Schema({
    idPedido: {
        unique: [true,'Este pedido ya esta relacionado a una venta, intente con uno diferente'], //Que sea unico
        type: Number,
        required: [true, 'El idPedido es necesario']
    },
    fechaVenta: {
        type: Date,
        required: [true, 'La fecha de la venta es necesaria']
    },

    valorTotal :{
        type: Number,
        required: [true, 'El valor total es necesario']
    },
    formaDePago: {
        type: String,
        required: [true, 'La forma de pago es necesaria'],
        enum: ['Crédito', 'Contado']
    },
    observaciones: {
        type: String,
    },
    estado: {
        type: Boolean,
        required: [true, 'El estado de pago es necesario'],
    }
})

module.exports = model('Ventas', VentasSchema);