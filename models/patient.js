const mongoose = require("mongoose");

const pateintSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      maxLength: 10,
      unique: true,
      required: true,
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
    },
  },
  {
    timestamps: true,
  }
);

const Patient = mongoose.model("Patient", pateintSchema);
module.exports = Patient;
