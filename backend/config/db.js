const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB connected to the ${conn.connection.host}`);
  } catch (error) {
    console.log(
      `Error connecting to ${conn.connection.host}`.red.underline.bold
    );
    process.exit(1);
  }
};

dbConnection();

module.exports = dbConnection;
