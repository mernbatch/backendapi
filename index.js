const express = require("express");
const cors = require("cors");
const app = express();
const products = require("./routes/products");
const users = require("./routes/users");
const photos = require("./routes/photos");
const test = require("./routes/test");

app.use(cors());
require("dotenv").config();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Server is running here");
});

app.use("/products", products);
app.use("/users", users);
app.use("/photos", photos);
app.use("/test", test);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
