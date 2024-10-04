// server/models/Food.js
const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Food', foodSchema);
