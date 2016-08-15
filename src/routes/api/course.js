const course = require('../../models/course');

// Set module.exports to a function that excepts express as a paramater of express.
module.exports = (express) => {
// Sets constant of router to express.Router() function
  const router = express.Router();


// read - respond with courses json when a GET request is made to the courses route
  router.get('/courses', (req, res) => {
    course.all((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });


// create
  router.post('/courses', (req, res) => {
    course.add(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

// update
  router.post('/courses/:id', (req, res) => {
    req.body.id = req.params.id;
// respond with this json data
    course.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

// delete
  router.delete('/courses/:id', (req, res) => {
    req.body.id = req.params.id;
// respond with this json data
    course.remove(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

// read by id
// respond with course by id when a GET request is made to the courses by id route
  router.get('/courses/:id', (req, res) => {
    req.body.id = req.params.id;
// respond with this json data
    course.one(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });
// returns router with correct data
  return router;
};
