const { response } = require('express')


//Importar modelos
const Ventas = require('../models/ventas')


const ventasGet = async (req, res = response) => {

    const ventas = await Ventas.find()

    res.json({
        ventas
    })
}

const ventasPost = async (req, res = response) => {

    const body = req.body //CAptura dde atributos
    let mensaje = ''
    console.log(body)
    
    try {
        const ventas = new Ventas(body)
        await ventas.save()
        mensaje = "La venta se registró  correctamente"
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

const ventasPut = async (req, res = response) => {
    const {idPedido, valorTotal, fechaVenta, formaDePago, observaciones, estado } = req.body//modificar

    let mensaje = ""


    try {
        const ventas = await Ventas.findOneAndUpdate({ idPedido: idPedido }, { fechaVenta: fechaVenta, valorTotal: valorTotal,formaDePago: formaDePago, observaciones: observaciones, estado: estado  })//Primera llave es el nombre del atributo, el segundo es el nuevo atributo
        mensaje = "La venta se modificó correctamente"
    } catch (error) {
        mensaje = "Error al modificar"
    }
    res.json({
        msg: mensaje
    })
}

const ventasDelete = async (req, res = response) => {
    const { _id } = req.body

    let mensaje = ""


    try {
        const ventas = await Ventas.findOneAndDelete({ _id: _id })
        mensaje = "La venta se eliminó correctamente"
    } catch (error) {
        mensaje = "Error al eliminar"
    }
    res.json({
        msg: mensaje
    })
}

module.exports = {
    ventasGet,
    ventasPost,
    ventasPut,
    ventasDelete
}


//LISTO GET POST PUT DELETE