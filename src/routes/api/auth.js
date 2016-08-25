const auth = require('../../models/auth');
const jwt = require('jsonwebtoken');
const config = require('../../../config');

module.exports = (express) => {
  const router = express.Router();

  // mock form post
  router.post('/auth', (req, res) => {
    auth.check(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      if (!data) {
        res.status(500).send({ message: 'User not found.' });
      } else if (data) {
        // check password
        if (data.password !== req.body.password) {
          res.status(500).send({ message: 'Wrong password.' });
        } else {
          // sets specifs fields of object required to sign
          const User = { username: req.body.username, password: req.body.password };
          // create a token
          const token = jwt.sign(User, config.secret, {
              // expires in 7 days
            expiresIn: 20,
          });
          // return the information including token as JSON
          res.status(200).send({
            message: 'here is your token!',
            token,
          });
        }
      }
    });
  });
    // returns router with correct data
  return router;
    // closing module
};
