// Sets constant express to 'express' module
const express = require('express');

// Sets constant 'body_parser' to module
const body_parser = require('body-parser');

// sets constant 'app' to express functionality
const app = express();

//config sets what port to run on
const port = 3000;

//JSON formatting
app.set('json spaces', 2);

// linking routes
app.use('/api', require('./routes/api.js')(express));

//sets variable server to the listening action on port
app.listen(port,() => {
  console.log('server active on', port)
});
