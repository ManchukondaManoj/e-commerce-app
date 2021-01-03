const User = require('../../models/User');
const generateToken = require('../../utils/generateToken');

module.exports = async (req, res) => {
  const userObj = new User();
  const user = await userObj.findUserById(req.user._id);
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error('Invalid User details');
  }
};
