const Product = require('../../../schemas/productSchema.js');

module.exports = async (productId) => {
  const product = await Product.findById(productId);
  return product;
};
