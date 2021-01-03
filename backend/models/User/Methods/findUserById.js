const User = require('../../../schemas/userSchema');

module.exports = async (id) => {
  const user = await User.findById(id).select('-password');
  return user;
};
