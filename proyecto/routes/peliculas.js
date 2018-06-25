const express = require('express');
const router = express.Router();

const peliculaModel = require('../models/peliculas');

router.get('/',peliculaModel.find);
router.get('/:id',peliculaModel.findOne);
router.post('/',peliculaModel.create);
router.put('/:id',peliculaModel.update);
router.delete('/:id',peliculaModel.delete);

module.exports = router;
