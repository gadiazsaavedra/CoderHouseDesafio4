const express = require('express');

class Server{

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.productosRoutePath = '/api/productos';

        
        this.middlewares();

        
        this.routes();
    }

    middlewares() {

        
        this.app.use( express.json() );
        this.app.use( express.urlencoded({extended: false}));

        // Directorio Publ
        this.app.use( express.static('public') );

    }

    routes() {

        this.app.use( this.productosRoutePath, require('../routes/productos') );

    }

    listen() {
        this.app.listen( this.port , () => {
            console.log("Servidor corriendo en puerto", this.port);
        });
    }

}

module.exports = Server;