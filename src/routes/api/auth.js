const user = require('../../models/user');
const jwt = require('express-jwt');
const config = require('../../config');

module.exports = (express) => {
  const router = express.Router();

 // mock form
  router.post('/auth', (req, res) => {
 // find user in db
    user.try(req.body, (err) => {
      // error callback
      res.status(500).json(err);
    }, (data) => {
      // check if you are not a user
      if (!user) {
        // if not a user respond in json
        res.json({ success: false, message: 'user not found.' });
      } else if (user) {
          // check if password matches in db
        if (user.password !== req.user.password) {
          res.json({ success: false, message: 'Wrong password.' });
          console.log(data);
          // if user is found and password is right
        } else {
            // create a token
          const token = jwt.sign(user, router.get(config.secret), {
            // expires in 7 days
            expiresInMinutes: 10080,
          });
            // return the information including token as JSON
          res.json({
            success: true,
            token: token,
          });
          // closes create jstoken on sucess
        }
        // closes if user is true
      }
      // closes success call back
    });
    // closes mock form
  });
  // returns router with correct data
  return router;
  // closing module
};
