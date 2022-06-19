const { Router } = require('express');


const router = Router();


const { productosGet, productoPost, productosGetById, productoUpdate, productoDelete } = require('../controllers/productos');


router.get( '/', productosGet ); 
router.get('/:id', productosGetById ); 
router.post( '/', productoPost ); // Guarda un producto (Predefinido en el método)
router.put('/:id', productoUpdate); // Actualiza el producto por ID
router.delete('/:id', productoDelete); // Elimino el producto por ID

module.exports = router;