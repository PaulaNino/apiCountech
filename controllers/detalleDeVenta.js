const { response } = require('express')


//Importar modelos
const DetalleDeVenta = require('../models/detalleDeVenta')


const detalleDeVentaGet = async (req, res = response) => {

    const detalleDeVenta = await DetalleDeVenta.find()

    res.json({
        detalleDeVenta
    })
}

const detalleDeVentaPost = async (req, res = response) => {

    const body = req.body //CAptura dde atributos
    let mensaje = ''
    console.log(body)
    
    try {
        const detalleDeVenta = new DetalleDeVenta(body)
        await detalleDeVenta.save()
        mensaje = "El detalle de venta se registró correctamente"
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

const detalleDeVentaPut = async (req, res = response) => {
    const {_id, observaciones, referencia, proceso, color, talla } = req.body//modificar

    let mensaje = ""


    try {
        const detalleDeVenta = await DetalleDeVenta.findOneAndUpdate({ _id: _id }, { observaciones: observaciones, referencia: referencia, proceso: proceso, color: color, talla:talla  })//Primera llave es el nombre del atributo, el segundo es el nuevo atributo
        mensaje = "El detalle de venta se modificó correctamente"
    } catch (error) {
        mensaje = "Error al modificar"
    }
    res.json({
        msg: mensaje
    })
}

const detalleDeVentaDelete = async (req, res = response) => {
    const { _id } = req.body

    let mensaje = ""


    try {
        const detalleDeVenta = await DetalleDeVenta.findOneAndDelete({ _id: _id })
        mensaje = "El detalle de venta se eliminó correctamente"
    } catch (error) {
        mensaje = "Error al eliminar"
    }
    res.json({
        msg: mensaje
    })
}

module.exports = {
    detalleDeVentaGet,
    detalleDeVentaPost,
    detalleDeVentaPut,
    detalleDeVentaDelete
}



//LISTO GET POST PUT DELETE