const jwt = require('jsonwebtoken');
const User = require('../models/User');
const details = require('../details');

module.exports = async (req, res, next) => {
  const authToken = req.headers.authorization;
  let token = authToken.split('Bearer ')[1];
  if (token) {
    try {
      const decoded = jwt.verify(token, details['JWT_SECRET']);
      const userObj = new User();
      const user = await userObj.findUserById(decoded.id);
      req.user = user;
      next();
    } catch (error) {
      console.log('Error', error);
      res.status(401);
      throw new Error('Not Valid Token');
    }
  }
  if (!token) {
    res.status(401);
    throw new Error('Invalid auth token');
  }
};
