const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

connectToMongo(); // Connect to MongoDB

app.use(cors());
app.use(express.json());

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Use the auth routes
app.use("/api/auth", require("./routes/auth"));

// Other routes can be added similarly
// app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
