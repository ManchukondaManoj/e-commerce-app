const User = require('../../../schemas/userSchema');

module.exports = async (query, updateObj) => {
  const user = await User.updateOne(query, updateObj);
  return user;
};
