const express = require("express");

const router = express.Router();

router.get("/todos", async (req, res) => {
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
