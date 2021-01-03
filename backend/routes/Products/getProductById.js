const Products = require('../../models/Products/index.js');

module.exports = async (req, res) => {
  const { id } = req.params;
  const products = new Products();
  const data = await products.getProductById(id);
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(400);
    throw new Error('Product Not Found');
  }
};
