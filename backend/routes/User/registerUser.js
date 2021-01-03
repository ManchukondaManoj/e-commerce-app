const User = require('../../models/User');

module.exports = async (req, res) => {
  const { email, name, password } = req.body;
  const userObj = new User();
  const isUser = await userObj.findUser({ email });
  if (isUser) {
    res.status(400);
    throw new Error('User already exists');
  } else {
    const user = await userObj.createUser({
      name,
      email,
      password,
    });
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(400);
      throw new Error('Invalid user data');
    }
  }
};
