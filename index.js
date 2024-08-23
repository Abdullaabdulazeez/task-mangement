// index.js
require("dotenv").config();
const express = require("express");
const { AppDataSource } = require("./data-source");
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/tasks", taskRoutes);

AppDataSource.initialize()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running on http://localhost:3000");
    });
  })
  .catch((error) => console.log(error));
