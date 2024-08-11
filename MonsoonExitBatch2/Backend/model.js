const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
  EmpName: String,
  designation: String,
  empId: String,
  img_url: String,
});

const EmployeeModel = mongoose.model("Employee", employeeSchema); // Create the model

module.exports = EmployeeModel; // Export the model
