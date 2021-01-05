const User = require('../../models/User');
const generateToken = require('../../utils/generateToken');

module.exports = async (req, res) => {
  const userObj = new User();
  const user = await userObj.findUserById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }
    const query = {
      _id: user._id,
    };
    const updatedUser = await User.updatedUser(query, user);
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid User details');
  }
};
