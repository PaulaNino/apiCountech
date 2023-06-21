const { response } = require('express')


//Importar modelos
const Abonos = require('../models/abonos')


const abonosGet = async (req, res = response) => {

    const abonos = await Abonos.find()

    res.json({
        abonos
    })
}

const abonosPost = async (req, res = response) => {

    const body = req.body //Captura de atributos
    let mensaje = ''
    console.log(body)
    
    try {
        const abonos = new Abonos(body)
        await abonos.save()
        mensaje = "El abono se registró correctamente"
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

const abonosPut = async (req, res = response) => {
    const {_id, fechaAbono, valorAbono, estado } = req.body//modificar

    let mensaje = ""


    try {
        const abonos = await Abonos.findOneAndUpdate({ _id: _id }, { fechaAbono: fechaAbono, valorAbono: valorAbono, estado: estado})//Primera llave es el nombre del atributo, el segundo es el nuevo atributo
        mensaje = "El abono se modificó correctamente"
    } catch (error) {
        mensaje = "Error al modificar"
    }
    res.json({
        msg: mensaje
    })
}

const abonosDelete = async (req, res = response) => {
    const { _id } = req.body

    let mensaje = ""


    try {
        const abonos = await Abonos.findOneAndDelete({ _id: _id })
        mensaje = "El abono se eliminó correctamente"
    } catch (error) {
        mensaje = "Error al eliminar"
    }
    res.json({
        msg: mensaje
    })
}

module.exports = {
    abonosGet,
    abonosPost,
    abonosPut,
    abonosDelete
}



//LISTO GET POST PUT DELETE