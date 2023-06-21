const {Router} = require('express')

const route = Router() 

const {abonosGet, abonosPost, abonosPut, abonosDelete} = require('../controllers/abonos')

route.get('/', abonosGet)  

route.post('/', abonosPost)

route.put('/', abonosPut)

route.delete('/', abonosDelete)

module.exports = route