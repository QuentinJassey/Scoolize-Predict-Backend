const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndIsadmin,
  verifyTokenAndIssuperAdmin,

  verifyTokenAndIsstudent,
  verifyTokenAndIsteacher,
  verifyTokenAndIsheadmasterLycee,
  verifyTokenAndIsheadmasterHighschool,
} = require("../middlewares/jwtVerify.js"); //sep

const express = require("express");
const router = express.Router();

let {
  getecoles,
  postecoles,
  updateecoles,
  deleteecoles,
  getOneecoles,
} = require("../controller/ecoles.js");

router.get("/ecoles", getecoles);

router.post("/ecoles", postecoles);
router.put("/ecoles/:id", updateecoles);
router.delete("/ecoles/:id", deleteecoles);
router.get("/ecoles/:id", getOneecoles);

exports.ecoles = router;
