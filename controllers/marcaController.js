const productos = require('../models/productos');

exports.inicio = (req, res) => {
  res.render('index', { marcas: Object.keys(productos) });
};

exports.mostrarMarca = (req, res) => {
  const marca = req.params.nombre;
  const items = productos[marca];

  if (!items) {
    return res.status(404).send('Marca no encontrada');
  }

  res.render('marcas/marca', { marca, productos: items });
};
