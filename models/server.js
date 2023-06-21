const express = require('express')
const {dbConnection} = require('../database/config')
const cors = require('cors')//SEguridad extra
const bodyParser = require('body-parser')




class Server{


    constructor(){
        this.app = express()
        this.port = process.env.PORT //Capturando variable puerto
        this.usuarioPath = '/api/usuario'
        this.ventasPath = '/api/ventas' 
        this.detalleDeVentaPath = '/api/detalleDeVenta'//Ruta pública
        this.abonosPath = '/api/abonos'
        this.middlewares()
        this.routes()
        this.conectarbs()

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Escuchando por el puerto ${this.port}`)
        })
    }

    middlewares(){
        this.app.use(express.static(__dirname + "/public"));
        this.app.use(cors())
        this.app.use(bodyParser.json())
    }

    routes() {
       this.app.use(this.usuarioPath, require('../routes/usuarios'))
       this.app.use(this.ventasPath, require('../routes/ventas'))
       this.app.use(this.detalleDeVentaPath, require('../routes/detalleDeVenta'))
       this.app.use(this.abonosPath, require('../routes/abonos'))
    }
    async conectarbs(){
        await dbConnection()
    }
}

module.exports = { Server }
