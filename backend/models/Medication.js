const mongoose = require("mongoose");

const MedicationSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  directions: {
    type: String,
  },
  count: {
    type: Number,
  },
  type: {
    type: String,
    enum: ["Medication", "Supplement"],
  },
  urgency: {
    type: String,
    enum: ["Low", "Medium", "High"],
  },
  expiration: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Medication", MedicationSchema);
