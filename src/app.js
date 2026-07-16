const express = require("express");
const cors = require("cors");

const logger = require("./middleware/logger.middleware");
const studentRoutes = require("./routes/student.routes");
const notFound = require("./middleware/notFound.middleware");
const errorHandler = require("./middleware/error.middleware");

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);


app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Health Check - Student Management API Running Successfully",
  });
});


app.use("/api/students", studentRoutes);


app.use(notFound);




module.exports = app;