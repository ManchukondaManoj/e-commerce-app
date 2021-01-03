// import products from '../../data/products.js';

const Products = require('../../models/Products/index.js');

module.exports = async (req, res) => {
  const products = new Products();
  const data = await products.getProducts();
  res.status(200).json(data);
};
