
const jwt =require("jsonwebtoken");
const User = require("../models/userModel");

exports.isViewPermission = (req, res, next) => {
  try {
    // console.log(req.headers.authorization)
    const decoded = jwt.verify(
      req.headers.authorization, process.env.JWT_SECRET_KEY
    );
    
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json(err);
  }
};

exports.isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send("Unauthorized");
    } else {
      next();
    }
  } catch (err) {
    console.log(err);
  }
};
