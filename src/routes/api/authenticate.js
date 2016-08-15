const user = require('../../models/user');


module.exports = (express) => {
  const router = express.Router();

  // respond with users json when a GET request is made to the users route
  router.get('/users', (req, res) => {
    user.all((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });
  // returns router with correct data
  return router;
};
