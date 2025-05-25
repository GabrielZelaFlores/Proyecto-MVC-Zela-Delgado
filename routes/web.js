const express = require('express');
const router = express.Router();
const marcaController = require('../controllers/marcaController');

router.get('/', marcaController.inicio);
router.get('/marca/:nombre', marcaController.mostrarMarca);

module.exports = router;
