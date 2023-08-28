const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      enum: [
        "Negative",
        "Travelled-Quarantine",
        "Symptoms-Quarantine",
        "Positive-Admit",
      ],
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
    },
    createdFor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
    },
    date: {
      type: Date,
      default: Date.now,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Report = mongoose.model("Report", reportSchema);
module.exports = Report;
