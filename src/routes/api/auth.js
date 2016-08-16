const user = require('../../models/user');

module.exports = (express) => {
  const router = express.Router();

  // respond with user by id when a GET request is made to the users by id route
  router.post('/auth/:id', (req, res) => {
    const rb = req.body;
    rb.id = req.params.id;
  // respond with this json data
    user.one(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });





  });
  // returns router with correct data
  return router;
};
