const Doctor = require("../models/doctor");
const jwt = require("jsonwebtoken");

// creating new doctor
module.exports.register = async function (req, res) {
  try {
    let doctor = await Doctor.findOne({ email: req.body.email });
    console.log(doctor);

    //checking if doctor is already present with the given email id.
    if (doctor) {
      return res.status(409).json({
        success: false,
        message: "Email Id already taken",
      });
    }

    // if doctor not present create the doctor
    let newDoctor = await Doctor.create(req.body);
    // console.log(newDoctor);
    return res.status(201).json({
      success: true,
      message: newDoctor,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// doctor login
module.exports.login = async function (req, res) {
  // creating and returning jwt token for autherization
  jwt.sign(
    { doctor: req.user },
    "hospitalApi",
    { expiresIn: "1h" },
    (err, token) => {
      if (err) {
        return res.status(500).json({
          success: false,
          token: null,
          message: "Failed to login",
        });
      }
      return res.status(200).json({
        success: true,
        token,
        message: "Login Successful",
      });
    }
  );
};
