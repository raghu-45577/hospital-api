const express = require("express");
const passport = require("passport");
const router = express.Router();

const patientController = require("../controllers/patient_controller");
const reportController = require("../controllers/report_controller");

// for registering the new patient
router.post(
  "/register",
  passport.authenticate("jwt", { session: false }),
  patientController.register
);

// for creating the report for patient
router.post(
  "/:id/create_report",
  passport.authenticate("jwt", { session: false }),
  reportController.createReport
);

// for getting all the reports generated for the patient
router.get(
  "/:id/all_reports",
  passport.authenticate("jwt", { session: false }),
  reportController.allReportsOfPatient
);

module.exports = router;
