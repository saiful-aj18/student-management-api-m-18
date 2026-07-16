const express = require("express");

const {
  createStudent,
  getAllStudents,
  getSingleStudent,
} = require("../controllers/student.controller");

const router = express.Router();


router.post("/", createStudent);

router.get("/", getAllStudents);
router.get("/:id", getSingleStudent);





module.exports = router;