const express = require("express");
const AuthMiddleware = require("../middlewares/AuthMiddleware");

const router = express.Router();

router.get("/todos", AuthMiddleware, async (req, res) => {
  try {
    const todos = [
      {
        id: 1,
        todo: "Learn JSX",
        done: false,
        authorId: 1008,
      },
      {
        id: 2,
        todo: "Learn REACT",
        done: false,
        authorId: 1009,
      },
      {
        id: 3,
        todo: "Learn HTML",
        done: false,
        authorId: 1008,
      },
    ];

    const currentUserId = req.user.user.id;

    const userTodos = todos?.filter((todo) => todo.authorId === currentUserId)

    return res
      .json({
        success: true,
        data: userTodos,
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
