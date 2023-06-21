const {Router} = require('express')

const route = Router() 

const {detalleDeVentaGet, detalleDeVentaPost, detalleDeVentaPut, detalleDeVentaDelete} = require('../controllers/detalleDeVenta')

route.get('/', detalleDeVentaGet)  

route.post('/', detalleDeVentaPost)

route.put('/', detalleDeVentaPut)

route.delete('/', detalleDeVentaDelete)

module.exports = route