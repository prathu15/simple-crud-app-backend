const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute  = require("./routes/product.route.js");
const app = express();
//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API is Updated");
});






// delete a product


mongoose
  .connect(
    "mongodb+srv://prathudwivedi241:h6cp9UBhpdPLiNwR@backend.m1vnm.mongodb.net/CRUD?retryWrites=true&w=majority&appName=Backend"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
