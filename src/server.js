// Sets constant express to 'express' module
const express = require('express');

// Sets constant 'body_parser' to module
const bodyParser = require('body-parser');

// sets constant 'app' to express functionality
const app = express();

// config sets what port to run on
const port = process.env.PORT || 3000;

const util = require('../tools/util');

// JSON formatting
app.set('json spaces', 2);

// pinning body parser to app(express)
// body_parser.json - Parses the text as JSON and exposes the resulting object on req.body.
app.use(bodyParser.json());


// bodyParser.urlencoded - Parses the text as URL encoded data and exposes the resulting object
app.use(bodyParser.urlencoded({
  extended: true,
}));

// linking routes
app.use('/', require('./routes')(express));
app.use('/api/v1', require('./routes/api/api')(express));
app.use('/api/v1', require('./routes/api/app')(express));
app.use('/api/v1', require('./routes/api/user')(express));
app.use('/api/v1', require('./routes/api/course')(express));


// sets variable server to the listening action on port
const server = app.listen(port, () => {
//  console.log('server active on', port);
  util.debug('server active on' + " " + port);
});

// exports server to be used elsewhere
module.exports = server;
