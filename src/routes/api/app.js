const app = require('../../models/app');

// Set module.exports to a function that excepts express as a paramater of express.
module.exports = (express) => {
// Sets constant of router to express.Router() function
  const router = express.Router();

// read
// respond with apps json when a GET request is made to the apps route
  router.get('/apps', (req, res) => {
    app.all((errorCallback) => {
      res.status(500).json(errorCallback);
    }, (data) => {
      res.status(200).json(data);
    });
  });


// create
  router.post('/apps', (req, res) => {
    app.create(req.body, (errorCallback) => {
      res.status(500).json(errorCallback);
    }, (data) => {
      res.status(200).json(data);
    });
  });

// update
  router.post('/apps/:id', (req, res) => {
    req.body.id = req.params.id;
// respond with this json data
    app.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

// delete
  router.delete('/apps/:id', (req, res) => {
    req.body.id = req.params.id;
// respond with this json data
    app.destroy(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

// read by id
// respond with app by id when a GET request is made to the apps by id route
  router.get('/apps/:id', (req, res) => {
    req.body.id = req.params.id;
// respond with this json data
    app.find(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

// returns router with correct data
  return router;
};
