const {Router} = require('express')

const route = Router() 

const {ventasGet, ventasPost, ventasPut, ventasDelete} = require('../controllers/ventas')

route.get('/', ventasGet)  

route.post('/', ventasPost)

route.put('/', ventasPut)

route.delete('/', ventasDelete)

module.exports = route