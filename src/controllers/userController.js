const jwt = require('jsonwebtoken');
const User = require('../models/userModel'); // Replace with the path to your user model

exports.register = async (req, res) => {
  try {
    const { userName, password, photo, role, social } = req.body;

    // Check if userName and password are provided
    if (!userName || !password) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ userName });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Create a new user instance
    const newUser = new User({
      userName,
      password,
      photo,
      role,
      social,
    });

    // Save the user to the database
    await newUser.save();

    res.json({ message: 'User registered successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.login = async (req, res) => {
  try {
    const { userName, password } = req.body;

    // Check if userName and password are provided
    if (!userName || !password) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Find the user by userName
    const user = await User.findOne({ userName });

    // If no user is found, return an error
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare the provided password with the user's password
    if (password !== user.password) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Generate a JSON Web Token (JWT)
    const token = jwt.sign(
      { _id: user._id, userName: user.userName , role: user.role },
      'hs76hrg7*6wt3r5p3$jrh7te',
      { expiresIn: '7d' }
    );
    // const token = jwt.sign(
    //   { userId: user._id, userName: user.userName },
    //   process.env.JWT_SECRET_KEY,
    //   { expiresIn: '7d' }
    // );

    // Return the user's information and the token
    res.json({
      user: {
        userName: user.userName,
        photo: user.photo,
        role: user.role,
        social: user.social,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
