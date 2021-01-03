const mongoose = require('mongoose');
const colors = require('colors');
const users = require('./data/users.js');
const products = require('./data/products.js');

const User = require('./schemas/userSchema.js');
const Product = require('./schemas/productSchema.js');
const Order = require('./schemas/orderSchema.js');
require('./config/db.js');

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUser = await User.insertMany(users);
    const adminUser = createdUser[0]._id;
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);
    console.log('Data Imported'.green.inverse);
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data destroyed'.green.inverse);
    process.exit();
  } catch (error) {
    console.log(error.red.inverse);
    process.exit(1);
  }
};
if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
