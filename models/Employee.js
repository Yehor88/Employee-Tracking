const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: String,
  surname: String,
  hoursWorked: Number,
  birthDate: Date 
});

module.exports = mongoose.model('Employee', employeeSchema);
