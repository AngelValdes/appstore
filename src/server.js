// Sets constant express to 'express' module
const express = require('express');

// Sets constant 'body_parser' to module
const body_parser = require('body-parser');

// sets constant 'app' to express functionality
const app = express();

//config sets what port to run on
const port = process.env.PORT || 3000;

//JSON formatting
app.set('json spaces', 2);

//pinning body parser to app(express)
//body_parser.json - Parses the text as JSON and exposes the resulting object on req.body.
app.use(body_parser.json());


//bodyParser.urlencoded - Parses the text as URL encoded data and exposes the resulting object
app.use(body_parser.urlencoded({
  extended: true,
}));

// linking routes
 app.use('/', require('./routes')(express));
// app.use('/api/v1', require('./routes/api/api.js')(express));
// app.use('/api/v1', require('./routes/api/app.js')(express));
// app.use('/api/v1', require('./routes/api/user.js')(express));

//sets variable server to the listening action on port
const server = app.listen(port,() => {
  console.log('server active on', port)
});

// exports server to be used elsewhere
module.exports = server;
