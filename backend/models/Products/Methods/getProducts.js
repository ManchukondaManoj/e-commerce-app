const Product = require('../../../schemas/productSchema.js');

module.exports = async () => {
  const products = await Product.find({});
  return products;
};
