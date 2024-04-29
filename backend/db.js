const mongoose = require("mongoose");


const connectToMongo = async () => {
  try {
    await mongoose.connect('MONGO_URL')
    console.log("Connected to mongoose successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectToMongo;
