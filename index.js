const express = require('express')
const app = express();
const dbConfig = require('./config/dbConfig');
const ejs = require('ejs');
const path = require('path');

var indexRoutes = require('./routes/indexRoutes');
var userRoutes = require('./routes/userRoutes');
var courseRoutes = require('./routes/courseRoutes');

// View Engine Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use('/', indexRoutes);
app.use('/users', userRoutes);
app.use('/courses', courseRoutes)

app.listen(3000, () => {
    console.log('The server is running at port 3000!!')
})