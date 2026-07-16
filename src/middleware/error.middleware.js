const errorHandler = (err, req, res, next) => {
  console.error(err);

  if (err.code === 11000) {
    return res.status(400).json({
      success: false,
      message: "Email already exists",
    });
  }

  if (err.name === "ValidationError") {
    const errors = Object.values(err.errors).map(
      (item) => item.message
    );

    return res.status(400).json({
      success: false,
      message: errors.join(", "),
    });
  }

  if (err.name === "CastError") {
    return res.status(400).json({
      success: false,
      message: "Invalid Student ID",
    });
  }

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};

module.exports = errorHandler;