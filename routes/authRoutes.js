// routes/authRoutes.js
const express = require("express");
const authService = require("../services/authService");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const user = await authService.register(email, password, role);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await authService.login(email, password);
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
