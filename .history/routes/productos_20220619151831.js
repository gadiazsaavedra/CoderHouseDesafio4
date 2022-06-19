const { Router } = require('express');


const router = Router();


const { productosGet, productoPost, productosGetById, productoUpdate, productoDelete } = require('../controllers/productos');


router.get( '/', productosGet ); 
router.get('/:id', productosGetById ); 
router.post( '/', productoPost ); 
router.put('/:id', productoUpdate); 
router.delete('/:id', productoDelete); 

module.exports = router;