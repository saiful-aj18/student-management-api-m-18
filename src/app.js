const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Health check successful"
  });
});




module.exports = app;