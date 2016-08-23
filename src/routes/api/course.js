const course = require('../../models/course');
const jwt = require('express-jwt');
const config = require('../../config');

// Set module.exports to a function that excepts express as a paramater of express.
module.exports = (express) => {
// Sets constant of router to express.Router() function
  const router = express.Router();

  const jwtCheck = jwt({
    secret: config.secret,
  });

  router.use('/courses', jwtCheck);

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
    const rb = req.body;
    rb.id = req.params.id;
// respond with this json data
    course.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

// delete
  router.delete('/courses/:id', (req, res) => {
    const rb = req.body;
    rb.id = req.params.id;
// respond with this json data
    course.remove(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

// respond with course by id when a GET request is made to the courses by id route
  router.get('/courses/:id', (req, res) => {
    const rb = req.body;
    rb.id = req.params.id;
// respond with this json data
    course.one(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  router.get('/courses',
    jwt({ secret: 'seanisawsome' }),
    (req, res) => {
      if (!req.user.admin) return res.sendStatus(401);
      res.sendStatus(200);
    });


// returns router with correct data
  return router;
};
