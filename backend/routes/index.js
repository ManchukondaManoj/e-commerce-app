const express = require('express');
const router = express.Router();

const products = require('./Products');
const user = require('./User');

router.use('/products', products);
router.use('/users', user);

module.exports = router;
