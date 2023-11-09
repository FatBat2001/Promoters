require('dotenv').config();
const express = require("express");
const cors = require('cors'); 
const mongoose = require('mongoose'); 
const path = require("path");
const cookieParser = require('cookie-parser'); 
const connectDB = require('./config/dbConn'); 
const corsOptions = require('./config/corsOptions'); 
const verifyLogin = require('./middleware/verifyLogin'); 

// first thing connect to the database 
connectDB(); 

const app = express();

const PORT = process.env.PORT || 10000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "uploads")));
app.use(express.json());
app.use(cors(corsOptions)); 
app.use(cookieParser());


app.get('/testing',verifyLogin, (req, res) => {
    res.status(200).json('authorized'); 
}); 
app.post('/testing',verifyLogin, (req, res) => {
    res.status(200).json('authorized'); 
}); 


app.use('/admin-login', require('./routes/login')); 
app.use('/admin-logout', require('./routes/logout'));
app.use('/create-event', require('./routes/createEvent')); // should apply the verfyLoing middlware but waiting for login module
app.use('/delete-event', require('./routes/deleteEvent')); 
app.use('/get-events', require('./routes/getEvetns'));
app.use('/contact-us', require('./routes/mailer')); 

mongoose.connection.once('open', () => {
    console.log('connected to MongoDB'); 
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
      });
}); 


