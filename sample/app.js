const { name } = require("ejs");
const express = require("express");
const app = express();
const PORT = 5000;

app.set("view engine", "ejs");

app.use(express.static("public"));

const items = [
  {
    name: "Akshay",
    age: 25,
    place: "Payyanur",
    height: 174,
    weight: 70,
  },
  { name: "Alex", age: 26, place: "Kannur", height: 173, weight: 68 },
];

app.get("/items", (req, res) => {
  res.render("index", { items });
});

app.listen(PORT, () => console.log(`Successfully running on port ${PORT}`));
