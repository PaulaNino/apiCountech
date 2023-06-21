const {Schema, model} = require('mongoose')

const AbonosSchema = Schema({
    idVenta: {
        type: Number,
        required: [true, 'El idVenta es necesario']
    },
    fechaAbono: {
        type: Date,
        required: [true, 'La fecha del abono es necesario']
    },

    valorAbono :{
        type: Number,
        required: [true, 'El valor del abono es necesario']
    },
    estado:{
        type: Boolean,
        required: [true, 'El estado del abono es necesario'],
        default: true
    }
})

module.exports = model('Abonos', AbonosSchema);