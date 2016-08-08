const user = require('../../models/user');

// Set module.exports to a function that excepts express as a paramater of express.
module.exports = (express) => {
// Sets constant of router to express.Router() function
  const router = express.Router();

// read
// respond with users json when a GET request is made to the users route
  router.get('/users', (req, res) => {
    user.all((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });


// create
  router.post('/users', (req, res) => {
    user.add(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

// update
  router.post('/users/:id', (req, res) => {
    req.body.id = req.params.id;
// respond with this json data
    user.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

// delete
  router.delete('/users/:id', (req, res) => {
    req.body.id = req.params.id;
// respond with this json data
    user.remove(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

// read by id
// respond with user by id when a GET request is made to the users by id route
  router.get('/users/:id', (req, res) => {
    req.body.id = req.params.id;
// respond with this json data
    user.one(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // read apps by id
  // respond with user by id when a GET request is made to the users by id route
  router.get('/users/:id/apps', (req, res) => {
    req.body.id = req.params.id;
  // respond with this json data
    user.one(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data.apps);
    });
  });

// returns router with correct data
  return router;
};
