const db = require('./db');

export.create = (payload, err, success) => {
  db.user.create(payload).then(success).catch(err);
}
