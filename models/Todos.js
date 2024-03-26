const express = require("express");
const AuthMiddleware = require("../middlewares/AuthMiddleware");

const router = express.Router();

router.get("/todos", AuthMiddleware, async (req, res) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const result = await response.json();
    return res
      .json({
        success: true,
        data: result,
      })
      .status(201);
  } catch (error) {
    return res
      .json({
        success: false,
        message: "Something went wrong. Please try again!",
      })
      .status(500);
  }
});

module.exports = router;
