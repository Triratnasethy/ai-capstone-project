const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log("Welcome to AI Capstone Project!");
  console.log(`Server running on http://localhost:${PORT}`);
});
