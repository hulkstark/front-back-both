const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;


app.use(cors());
app.use(express.json());

// Other routes can be added similarly
// app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
