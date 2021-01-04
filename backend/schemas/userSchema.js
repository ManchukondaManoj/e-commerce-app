const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: String,
      required: true,
      default: false,
    },
  },
  { timestamps: true, strict: false }
);

userSchema.methods.comparePassword = async function (userPassword) {
  return await bcrypt.compare(userPassword, this.password);
};

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = bcrypt.genSaltSync(10);
  this.password = bcrypt.hashSync(this.password, salt);
});

const User = mongoose.model('User', userSchema);

module.exports = User;
