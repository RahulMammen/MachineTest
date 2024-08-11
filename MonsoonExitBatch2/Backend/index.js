const express = require("express");
const cors = require("cors");
const EmployeeModel = require("./model"); // Import the model

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());
require("./connection");

// POST API to add a new employee
app.post("/add", async (req, res) => {
  try {
    const result = await EmployeeModel(req.body).save();
    res.send({ message: "Employee added", data: result });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error adding employee" });
  }
});

// GET API to retrieve all employees
app.get("/get", async (req, res) => {
  try {
    const employees = await EmployeeModel.find(); // Fetch all employee records
    res.send(employees);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error fetching employees" });
  }
});

// GET API to retrieve a specific employee by ID
app.get("/get/:id", async (req, res) => {
  try {
    const employee = await EmployeeModel.findById(req.params.id);
    if (!employee) {
      return res.status(404).send({ message: "Employee not found" });
    }
    res.send(employee);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error fetching employee" });
  }
});

// PUT API to update an employee by ID
app.put("/update/:id", async (req, res) => {
  try {
    const updatedEmployee = await EmployeeModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Return the updated document
    );
    if (!updatedEmployee) {
      return res.status(404).send({ message: "Employee not found" });
    }
    res.send({ message: "Employee updated", data: updatedEmployee });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error updating employee" });
  }
});

// DELETE API to remove an employee by ID
app.delete("/delete/:id", async (req, res) => {
  try {
    const deletedEmployee = await EmployeeModel.findByIdAndDelete(req.params.id);
    if (!deletedEmployee) {
      return res.status(404).send({ message: "Employee not found" });
    }
    res.send({ message: "Employee deleted", data: deletedEmployee });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error deleting employee" });
  }
});

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
