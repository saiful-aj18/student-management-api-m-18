const express = require("express");

const {
  createStudent,
  getAllStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent
} = require("../controllers/student.controller");

const router = express.Router();

router.post("/", createStudent);

router.get("/", getAllStudents);
router.get("/:id", getSingleStudent);

router.put("/:id", updateStudent);

router.delete("/:id", deleteStudent);



module.exports = router;