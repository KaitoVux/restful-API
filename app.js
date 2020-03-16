const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

require('dotenv').config();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const postRoute = require("./routes/posts");

app.use('/posts',postRoute);

app.get('/',(req, res) => {
    res.send("bla bla ....");
});


mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB");
  }
);

app.listen(PORT, () => {
  console.log("Listening on port: ", PORT);
});
