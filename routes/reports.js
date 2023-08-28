const express = require("express");
const passport = require("passport");
const router = express.Router();

const reportsController = require("../controllers/report_controller");

// getting all the reports based on status
router.get(
  "/:status",
  passport.authenticate("jwt", { session: false }),
  reportsController.allReportsByStatus
);

module.exports = router;
