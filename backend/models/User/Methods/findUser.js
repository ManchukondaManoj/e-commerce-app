const User = require('../../../schemas/userSchema');

module.exports = async (userObj) => {
  const user = await User.findOne(userObj);
  return user;
};
