const Student = require("../models/Student");
const sendResponse = require("../utils/sendResponse");


const createStudent = async (req, res, next) => {
  try {
    const student = await Student.create(req.body);

    sendResponse(
      res,
      201,
      true,
      "Student created successfully",
      student
    );
  } catch (error) {
    next(error);
  }
};

const getAllStudents = async (req, res, next) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });

    sendResponse(
      res,
      200,
      true,
      "Students fetched successfully",
      students
    );
  } catch (error) {
    next(error);
  }
};

const getSingleStudent = async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return sendResponse(
        res,
        404,
        false,
        "Student not found"
      );
    }

    sendResponse(
      res,
      200,
      true,
      "Student fetched successfully",
      student
    );
  } catch (error) {
    next(error);
  }
};

const updateStudent = async (req, res, next) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!student) {
      return sendResponse(
        res,
        404,
        false,
        "Student not found"
      );
    }

    sendResponse(
      res,
      200,
      true,
      "Student updated successfully",
      student
    );
  } catch (error) {
    next(error);
  }
};

const deleteStudent = async (req, res, next) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) {
      return sendResponse(
        res,
        404,
        false,
        "Student not found"
      );
    }

    sendResponse(
      res,
      200,
      true,
      "Student deleted successfully",
      null
    );
  } catch (error) {
    next(error);
  }
};


module.exports = {
  createStudent,
  getAllStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent
};
 