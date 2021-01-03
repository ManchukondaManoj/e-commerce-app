const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
dotenv.config();

require('./config/db.js');
const Routes = require('./routes/index.js');
const { notFound, errorHandler } = require('./middleware');

const app = express();

app.use(express.json());

//Disable caching and fixing 304 not modified error code
app.get('/*', function (req, res, next) {
  res.setHeader('Last-Modified', new Date().toUTCString());
  next();
});

app.use('/api', Routes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log(`Server running on ${PORT}`.yellow.bold));
