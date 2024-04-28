const mongoose = require("mongoose");


const connectToMongo = async () => {
  try {
    await mongoose.connect('mongodb+srv://rawatamit2002:MCr7T8jEqUdeF9WD@user-db.spbrwt5.mongodb.net/?retryWrites=true&w=majority&appName=user-db')
    console.log("Connected to mongoose successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectToMongo;
