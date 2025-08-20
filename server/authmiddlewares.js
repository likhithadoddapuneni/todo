// server/authMiddleware.js
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Format: Bearer <token>

  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, "SECRET_KEY"); // use same secret as in login
    req.user = decoded; // attach decoded user info to req
    next();
  } catch (error) {
    return res.status(403).json({ error: "Invalid or expired token." });
  }
};

module.exports = authMiddleware;
