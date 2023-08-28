const express = require("express");
const passport = require("passport");
const router = express.Router();

const doctorController = require("../controllers/doctor_controller");

// for registering the new doctor
router.post("/register", doctorController.register);

// for logging in the doctor
router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  doctorController.login
);

module.exports = router;
