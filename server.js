const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// Import Routes
const postRoutes = require('./routes/post');
const authRoutes = require('./routes/auth');


// app
const app = express();

// DataBase Connection
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => console.log('DataBase connected'))
    .catch(err => console.log(err));

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

// route middleware
app.use('/api', postRoutes);
app.use('/api', authRoutes);


// port
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server listening on port ${port}`));