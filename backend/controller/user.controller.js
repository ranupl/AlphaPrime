const asyncHandler = require('express-async-handler');
const { User } = require('../models/user.model');
const bcrypt = require('bcryptjs');

const { generateToken } = require("../utils/generateToken");

module.exports.signUp = asyncHandler(async (req, res) => {
    const { companyName, email, password } = req.body;
  
    // Check if the user already exists
    const isExisting = await User.findOne({ email });
    if (isExisting) {
      return res.status(400).json({ message: 'User already exists' });
    }
  
    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
  
    // Create the user
    const user = await User.create({
      companyName,
      email,
      userType: 'admin',
      status: 'active',
      password: hashedPassword,
    });
  
    let data = {
      user,
      token: generateToken(user._id),
    };
  
    res.status(201).json({ data });
  });


// User Login
module.exports.login = asyncHandler(async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email: email });
 
    if (!user) {
        res.status(401);
        res.json({ error: 'Incorrect email or password' });
    } else {
        var isValidLogin = await bcrypt.compare(password, user.password);

        if (isValidLogin) {
            
            if (user.userType === 'admin') {
                let data = {
                    user,
                    token: generateToken(user._id),
                };
                res.status(200);
                res.json({ data });
            } else {
                res.status(401);
                res.json({ error: 'Unauthorized.' });
            }
        } else {
            res.status(401);
            res.json({ error: 'Incorrect email or password' });
        }
    }
});
