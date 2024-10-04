// server/routes/foodRoutes.js
const express = require('express');
const router = express.Router();
const Food = require('../models/Food'); // Import the Food model

// Get all food items
router.get('/', async (req, res) => {
  try {
    const foodItems = await Food.find();
    res.json(foodItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new food item
router.post('/add', async (req, res) => {
  const { item } = req.body;

  if (!item) {
    return res.status(400).json({ message: 'Food item is required' });
  }

  const newFoodItem = new Food({ item });

  try {
    const savedFoodItem = await newFoodItem.save();
    res.status(201).json(savedFoodItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
