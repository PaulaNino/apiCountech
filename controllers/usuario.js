const { response } = require('express')
const bcrypt = require('bcrypt')

//Importar modelos
const Usuario = require('../models/usuario')


const usuarioGet = async (req, res = response) => {

    const usuarios = await Usuario.find()

    res.json({
        usuarios
    })
}

const usuarioPost = async (req, res = response) => {

    const body = req.body //CAptura dde atributos
    let mensaje = ''
    console.log(body)
    
    try {
        const salt = 10
        const usuario = new Usuario(body)
       
        usuario.password = bcrypt.hashSync(body.password, salt)
        await usuario.save()
        mensaje = "La inserción se realizó correctamente"
    } catch (error) {
        console.log(error)
        if (error.name === 'ValidationError') {
            console.error(Object.values(error.errors).map(val => val.message))
            mensaje = Object.values(error.errors).map(val => val.message)
        }
    }
    
    console.log(mensaje)
    res.json({
        msg: mensaje
    })
}

const usuarioPut = async (req, res = response) => {
    const { nombre, password, estado } = req.body//modificar

    let mensaje = ""


    try {//bcrypt.hashSync(body.password, 10)
        const usuario = await Usuario.findOneAndUpdate({ nombre: nombre }, { estado: estado, password: password})//bcrypt.hashSync(body.password,10) })//Primera llave es el nombre del atributo, el segundo es el nuevo atributo
        mensaje = "Se modificó correctamente"
    } catch (error) {
        mensaje = "Error al modificar"
    }
    res.json({
        msg: mensaje
    })
}

const usuarioDelete = async (req, res = response) => {
    const { nombre } = req.body//modificar

    let mensaje = ""


    try {
        const usuario = await Usuario.deleteOne({ nombre: nombre })//Primera llave es el nombre del atributo, el segundo es el nuevo atributo
        mensaje = "Se eliminó correctamente"
    } catch (error) {
        mensaje = "Error al eliminar"
    }
    res.json({
        msg: mensaje
    })
}

module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete
}



//LISTO GET POST PUT DELETE