const db = require('./db');
const slog = require('slogs');
const colors = require('colors');
const jwt = require('express-jwt');
const config = require('./../../config');

exports.check = (payload, err, success) => {
  db.user.find({
    where: {
      name: payload.name,
      password: payload.password,
      admin: payload.admin,
      student: payload.student,
    },
  },
  console.log(payload)
)
  .then(success).catch(err);
  slog.debug(colors.green('Create ') + 'token hit');
};

// create a token
//        const token = jwt.sign(auth, router.get(config.secret), {
//            // expires in 7 days
//          exp: 10080,
//        });
//            // return the information including token as JSON
//        res.json({
//          token: token,
//        });
