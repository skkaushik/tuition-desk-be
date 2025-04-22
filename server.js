const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const students = require('./routes/studentsRoutes')

const app = express();

const SERVER_PORT = 8080;

// body parser middleware
app.use(express.json());
app.use(cors());

//routes
app.use('/api/student', students)


//mongodb connection
connectDB();

app.get('/', (req, res) => {
    res.send('Tuition Desk API is running...');
});

app.listen(SERVER_PORT, () => {
    console.log(`Tuition Desk Server Running on ${SERVER_PORT}`);
})