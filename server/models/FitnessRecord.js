// server/models/FitnessModel.js
const mongoose = require('mongoose');
//only use const and mongoose.Schema because we only import mongoose
const fitnessRecordSchema = new mongoose.Schema({
  email: { type: String, required: true },
  //we cannot write the script to validate the email id so this is the advantages
  activity: { type: String, required: true },
  duration: { type: Number, required: true },
  calories: { type: Number, required: true },
  //if required is true then the user cannot able to submit the form without fill those filed
  date: { type: Date, default: Date.now }  // Ensure this field is present
});

module.exports = mongoose.model('FitnessRecord', fitnessRecordSchema);
