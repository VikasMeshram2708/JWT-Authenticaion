const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/login", (req, res) => {
  try {
    const reqBody = req.body;
    const { email, password } = reqBody;

    if (!email || !password) {
      throw new Error("Email and Password are required fileds.");
    }

    if (email !== "test@gmail.com" || password !== "test1") {
      return res.status(400).json({
        success: false,
        message: "Authenticaion Failed. Invalid credentials provided.",
      });
    }

    // token configuration
    const payload = {
      user: {
        id: 1008,
        email,
      },
    };

    const accessToken = jwt.sign(payload, process.env.JWT_SECRET);

    return res.status(201).json({
      message: "Login Successfull",
      success: true,
      token: accessToken,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again!",
    });
  }
});

module.exports = router;
