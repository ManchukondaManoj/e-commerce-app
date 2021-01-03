const User = require('../../models/User');
const generateToken = require('../../utils/generateToken');

module.exports = async (req, res) => {
  const { email, password } = req.body;
  const user = new User();
  const userObj = {
    email,
  };
  const data = await user.findUser(userObj);
  if (data && (await data.comparePassword(password))) {
    res.status(200).json({
      _id: data._id,
      name: data.name,
      email: data.email,
      isAdmin: data.isAdmin,
      token: generateToken(data._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid Email or Password');
  }
};
