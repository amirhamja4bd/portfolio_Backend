const express = require('express');
const router = require('./src/routes/api');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

// Secure Middleware
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

//DataBase 
const mongoose = require('mongoose');
// app.use(express.static('client/dist'));
app.use(express.static(path.join(__dirname, 'client', 'dist')));

// Security Middleware implementation
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

// Body Parser
app.use(bodyParser.json());

// Rate Limit
const limiter = rateLimit({ windowMs: 15 * 60 * 60, max: 3000 });


// Manage BackEnd Routings
app.use('/api/v1', router);


app.get('/', (req, res)=>{
    res.status(200).send(`
        <div class="container mt-5">
            <div class="jumbotron text-center">
                <h1 class="fs-3">Welcome to My E-Commerce Server</h1>
                <p class="lead">Visit My Website:- 
                <a class="" href="https://ceommerce-client.vercel.app/"> My E-Commerce Website</a></p>
            </div>
        </div>
    `);
});

// Manage Frontend Routes
app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
});




// Database Connection
const database = process.env.DATABASE_URL;
const port = process.env.PORT || 5000;

// Connect to Database and start server
mongoose.set('strictQuery', true);
mongoose
  .connect(database, { autoIndex: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server Running on port ${port}`);
    });
  })
  .catch((error) => console.log(error));

module.exports = app;
