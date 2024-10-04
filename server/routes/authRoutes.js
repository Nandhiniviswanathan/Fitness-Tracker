// server/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authController');

router.post('/signup', signup);//import /signup from the controllers
//here if we needed and specific parameter(email) to give we can give it in signup:email
/*
post - to create a new data 
get - to get data which is created already
put - to update the already created data 
delete - to delete the data
*/
router.post('/login', login);

module.exports = router;
