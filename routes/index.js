const express = require("express");
const passport = require("passport");
const router = express.Router();

router.use("/doctors", require("./doctors"));
router.use("/patients", require("./patients"));
router.use("/reports", require("./reports"));

// router.get(
//   "/profile",
//   passport.authenticate("jwt", { session: false }),
//   doctorController.profile
// );
module.exports = router;
