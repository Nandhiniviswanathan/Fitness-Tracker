// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');//used to get the input as json formate(key value formate)

const authRoutes = require('./routes/authRoutes');
const fitnessRoutes = require('./routes/fitnessRoutes');
const foodRoutes = require('./routes/foodRoutes'); // Import the food routes

const app = express();
const PORT = process.env.PORT || 5000;//syntax
const MONGO_URI = 'mongodb://localhost:27017/fitness-tracking-app';
/*we can also use .env file(eg:MONGOURL) as seperate file and import in this line like const MONGO_URI=process.env.MONGOURL */

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes we can use any name
app.use('/api/auth', authRoutes);//we can use any name apart from api but ensure the path .
app.use('/api/fitness', fitnessRoutes);
app.use('/api/food', foodRoutes); // Add food routes

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
