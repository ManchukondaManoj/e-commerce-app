const jwt = require('jsonwebtoken');
const details = require('../details');

const generateToken = (id) => {
  return jwt.sign({ id }, details['JWT_SECRET'], {
    expiresIn: '1d',
  });
};

module.exports = generateToken;
