const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      minlength: [3, "Name must be at least 3 characters"],
      maxlength: [100, "Name cannot exceed 100 characters"]
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^\S+@\S+\.\S+$/,
        "Please enter a valid email"
      ]
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true
    },

    course: {
      type: String,
      required: [true, "Course is required"],
      trim: true
    },

    department: {
      type: String,
      required: [true, "Department is required"],
      trim: true
    },

    semester: {
      type: String,
      required: [true, "Semester is required"],
      trim: true
    },

    address: {
      type: String,
      required: [true, "Address is required"],
      trim: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Student", studentSchema);