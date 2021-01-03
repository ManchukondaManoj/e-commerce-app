const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();

const getProducts = require('./getProducts.js');
const getProductById = require('./getProductById.js');

router.get('/', asyncHandler(getProducts));
router.get('/:id', asyncHandler(getProductById));

module.exports = router;
