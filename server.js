const express = require('express');
const mongoose = require('mongoose');
const employeeRoutes = require('./routes/employeeRoutes');
//
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());


// Підключення до MongoDB

mongoose.connect('mongodb+srv://Yehor:Yehor88@cluster0.j8st7su.mongodb.net/EmployeeTracking?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch((err) => console.error('❌ MongoDB connection error:', err));
// Роут
app.use('/api/Employees', employeeRoutes);
// Запуск сервера
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


