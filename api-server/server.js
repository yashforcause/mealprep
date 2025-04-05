const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

const meals = require("./meals.json");

app.use(cors());
app.use(express.json());

// GET /meals - fetch all meals
app.get("/meals", (req, res) => {
  res.json(meals);
});

// POST /reviews - stub for adding reviews (optional)
app.post("/reviews", (req, res) => {
  const { mealId, review } = req.body;
  console.log(`Review for Meal ID ${mealId}: ${review}`);
  res.status(201).json({ message: "Review submitted!" });
});

app.listen(port, () => {
  console.log(`Meal API running at http://localhost:${port}`);
});
