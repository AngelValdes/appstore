const db = require('./db');

// create
exports.create = (payload, err, success) => {
  db.app.create(payload).then(success).catch(err);
};

// read all
exports.findAll = (err, success) => {
  db.app.findAll().then(success).catch(err);
};

// read by id
exports.find = (payload, err, success) => {
  db.app.find({
    where: {
      id: payload.id,
    },
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
};

// update
exports.update = (payload, err, success) => {
  db.app.update({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
};

// delete
exports.destroy = (payload, err, success) => {
  db.app.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
};
