const User = require('../../../schemas/userSchema');

module.exports = async (userObj) => {
  const user = await User.create(userObj);
  return user;
};
