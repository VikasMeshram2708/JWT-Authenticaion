const jwt = require("jsonwebtoken");

const AuthMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];

    // Bearer Token

    const token = authHeader && authHeader.split(" ")[1];

    if (token == null) {
      return res.status(422).json({
        success: false,
        message: "No Authorization Header Found.",
      });
    }

    // Decode the token
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(422).json({
          success: false,
          message: "User Authentication Failed.",
        });
      }
      req.user = user;
      next();
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message:
        "Something went wrong. Failed to authenticate the Token. Please try again!",
    });
  }
};

module.exports = AuthMiddleware;
