const Patient = require("../models/patient");
const Doctor = require("../models/doctor");

// registering the patients
module.exports.register = async function (req, res) {
  try {
    let doctor_id = req.user._id;

    let checkPatient = await Patient.findOne({ phone: req.body.phone });

    // checking if the patient with the given phone number already exists
    if (checkPatient) {
      // if yes return the patient
      return res.status(200).json({
        success: true,
        patient: checkPatient,
        message: "Patient with this mobile number already registered",
      });
    }

    // if no patient with that number, create the new patient
    let newPatient = await Patient.create({
      name: req.body.name,
      phone: req.body.phone,
      doctor: doctor_id,
    });
    return res.status(201).json({
      success: true,
      patient: newPatient,
      message: "Patient registered successfully",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
