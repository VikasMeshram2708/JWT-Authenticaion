const express = require("express");
require("dotenv").config();
const morgan = require("morgan");

const app = express();

const Todos = require("../models/Todos");
const User = require("../models/User");

// Middlewares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(morgan("dev"));

// Routes
app.get("/", (req, res) => {
  res.json({
    message: "Hello,World!",
  });
});

// api end points
app.use("/api", Todos);
app.use("/api", User);

module.exports = app;
