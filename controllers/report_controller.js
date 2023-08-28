const Doctor = require("../models/doctor");
const Patient = require("../models/patient");
const Report = require("../models/report");

// creating the report for patient
module.exports.createReport = async function (req, res) {
  try {
    console.log(req.body);
    const report = await Report.create({
      status: req.body.status,
      createdBy: req.user._id,
      createdFor: req.params.id,
    });

    if (!report) {
      return res.status(500).json({
        success: false,
        message: "Report not created",
      });
    }
    return res.status(201).json({
      success: true,
      report,
      message: "Report created",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// getting all the reports of the patient
module.exports.allReportsOfPatient = async function (req, res) {
  try {
    let patientId = req.params.id;
    let patient = await Patient.findById(patientId);

    //checking if patient with the given id exists or not
    if (!patient) {
      return res.status(404).json({
        message: "Patient not found",
      });
    }

    // if patients exists, getting his/her reports
    let reports = await Report.find({ createdFor: patientId });
    return res.status(200).json({
      success: true,
      reports,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// getting all the reports based on the status
module.exports.allReportsByStatus = async function (req, res) {
  try {
    let reqStatus = req.params.status;
    let reports = await Report.find({ status: reqStatus });
    if (reports.length === 0) {
      return res.status(200).json({
        message: `No reports found with status ${reqStatus}`,
      });
    }
    return res.status(200).json({
      reports,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};
