const mongoose = require('mongoose');
const { mongodbURL } = require('../secret');

const connectDB = async (options = {}) => {
  try {
    //connect bd using mongoose
    await mongoose.connect(mongodbURL, options);
    console.log('DB connection successful');

    //error handling using mongoose
    mongoose.connect.on('error', (error) => {
      console.log('DB connection error:', error);
    });

  } catch (error) {
    console.log('Could not connect to DB:', error.toString());
  };

};

module.exports = connectDB;