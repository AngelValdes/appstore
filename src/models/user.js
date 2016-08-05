const db = require('./db');

exports.create = (payload, err, success) => {
  db.user.create(payload).then(success).catch(err);
};
