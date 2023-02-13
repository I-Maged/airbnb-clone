const express = require('express');
require('dotenv').config();
require('colors');
const PORT = process.env.PORT || 8080;
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (_, res) => {
  res.status(200).json({ message: 'Welcome to the Airbnb Clone API' });
});

app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
