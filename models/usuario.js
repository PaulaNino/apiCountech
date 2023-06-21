const {Schema, model} = require('mongoose')

const UsuarioSchema = Schema({
    nombre: {
        unique: [true,'El nombre ya existe, intente con uno diferente'], //Que sea unico
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    password: {
        type: String,
        required: true,
        minlength: [3, 'Se requieren mínimo 3 caracteres'],
        maxlength: [100, 'Se permiten máximo 10 caracteres']
    },

    estado:{
        type: Boolean,
        required: true,
        default: true
    }
})

module.exports = model('Usuario', UsuarioSchema);