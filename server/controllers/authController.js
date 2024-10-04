const User = require('../models/User');
//controller is used to check the datas and parameters in the backend
exports.signup = async (req, res) => {//to export the signin to routes folder
  try {
    const { email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {// to validate the signup page .
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    const newUser = new User({ email, password });
    await newUser.save();//here we does not use any asyncronuous key word such as .then ,  etc
    res.status(201).json({ message: 'User created' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
};
//here we use asyncronuous key word
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) {//to validate the user weather signup or not
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
};
