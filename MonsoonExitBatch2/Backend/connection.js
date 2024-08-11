const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://rahultommammen:INTERNSHIP1102@cluster0.sxgcvbd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0") // Update with your MongoDB URI
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log("DB Connection Error:", error);
  });
