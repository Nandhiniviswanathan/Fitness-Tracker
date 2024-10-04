const FitnessRecord = require('../models/FitnessRecord');

exports.addRecord = async (req, res) => {
  try {
    const { userId, steps, calories } = req.body;
    const newRecord = new FitnessRecord({ userId, steps, calories });
    await newRecord.save();
    res.status(201).json({ message: 'Fitness record added' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getRecords = async (req, res) => {
  try {
    const records = await FitnessRecord.find({ userId: req.params.userId });//find - to find the user datas
    res.status(200).json(records);//to display the response record
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });//500 to dispaly the error message
  }
};
