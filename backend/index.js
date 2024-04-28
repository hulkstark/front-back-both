const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

// Custom CORS middleware
const customCors = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://front-back-both-client.vercel.app");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PATCH, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", "true"); // Ensure credentials are allowed
  next();
};

// Use custom CORS middleware
app.use(customCors);

// Body parsing middleware
app.use(express.json());

// Connect to MongoDB
connectToMongo();

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Use the auth routes
app.use("/api/auth", require("./routes/auth"));

// Other routes can be added similarly
// app.use("/api/notes", require("./routes/notes"));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
