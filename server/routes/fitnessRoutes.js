// server/routes/fitnessRoutes.js
const express = require('express');
const router = express.Router();
const FitnessRecord = require('../models/FitnessRecord');

// Add a new fitness record
router.post('/add', async (req, res) => {
  const { email, activity, duration, date } = req.body;

  if (!email || !activity || !duration || !date) {
    return res.status(400).json({ message: 'Email, activity, duration, and date are required' });
  }

  const caloriesBurned = calculateCalories(activity, duration);

  try {
    // Create a new fitness record
    await FitnessRecord.create({ email, activity, duration, calories: caloriesBurned, date });
    res.status(200).json({ message: 'Fitness record added successfully' });
  } catch (error) {
    console.error('Error adding fitness record:', error);
    res.status(500).json({ message: 'Failed to add fitness record' });
  }
});

// Calculate calories burned based on activity and duration
function calculateCalories(activity, duration) {
  const activityRates = {
    running: 10,
    cycling: 8,
    swimming: 7,
    walking: 5,
    gym:9,
    jooging:6
  };

  const rate = activityRates[activity.toLowerCase()] || 0;
  return duration * rate;
}

module.exports = router;
