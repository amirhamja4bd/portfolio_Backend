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

// Database
const mongoose = require('mongoose');

// Middleware configuration
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

// Body Parser
app.use(bodyParser.json());

// Rate Limit
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);

// Serve static files
app.use(express.static(path.join(__dirname, 'client', 'dist')));

// API routes
app.use('/api/v1', router);

// Frontend route
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
});

// Database Connection
const database = process.env.DATABASE_URL;
const port = process.env.PORT || 5000;

// Connect to Database and start server
mongoose.set('strictQuery', true);
mongoose
  .connect(database, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    // Check if running in AWS Lambda environment
    if (process.env.LAMBDA_TASK_ROOT && process.env.AWS_EXECUTION_ENV) {
      const serverlessExpress = require('aws-serverless-express');
      const server = serverlessExpress.createServer(app);
      module.exports.handler = (event, context) => {
        serverlessExpress.proxy(server, event, context);
      };
    } else {
      // Start server locally
      app.listen(port, () => {
        console.log(`Server running on port ${port}`);
      });
    }
  })
  .catch((error) => console.log(error));





// const express = require('express');
// const router = require('./src/routes/api');
// const app = express();
// const bodyParser = require('body-parser');
// const path = require('path');
// require('dotenv').config();

// // Secure Middleware
// const rateLimit = require('express-rate-limit');
// const helmet = require('helmet');
// const mongoSanitize = require('express-mongo-sanitize');
// const xss = require('xss-clean');
// const hpp = require('hpp');
// const cors = require('cors');

// //DataBase 
// const mongoose = require('mongoose');
// // app.use(express.static('client/dist'));
// app.use(express.static(path.join(__dirname, 'client', 'dist')));

// // Security Middleware implementation
// app.use(cors());
// app.use(helmet());
// app.use(mongoSanitize());
// app.use(xss());
// app.use(hpp());

// // Body Parser
// app.use(bodyParser.json());

// // Rate Limit
// const limiter = rateLimit({ windowMs: 15 * 60 * 60, max: 3000 });

// // Manage BackEnd Routings
// app.use('/api/v1', router);

// // Manage Frontend Routes
// app.get('*', function (req, res) {
//   res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
// });

// // Database Connection
// const database = process.env.DATABASE_URL;
// const port = process.env.PORT || 5000;

// // Connect to Database and start server
// mongoose.set('strictQuery', true);
// mongoose
//   .connect(database, { autoIndex: true })
//   .then(() => {
//     app.listen(port, () => {
//       console.log(`Server Running on port ${port}`);
//     });
//   })
//   .catch((error) => console.log(error));

// module.exports = app;
