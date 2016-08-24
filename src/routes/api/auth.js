const auth = require('../../models/auth');

module.exports = (express) => {
  const router = express.Router();

  // mock form post
  router.post('/auth', (req, res) => {
    auth.check(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });
    // returns router with correct data
  return router;
    // closing module
};
