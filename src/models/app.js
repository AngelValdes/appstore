const db = require('./db');
const util = require('../../tools/util');

// create
exports.add = (payload, err, success) => {
  db.app.create(payload).then(success).catch(err);
  util.debug('app create model');
};

// read all
exports.all = (err, success) => {
  db.app.findAll().then(success).catch(err);
  util.debug('app read all model');
};

// read by id
exports.one = (payload, err, success) => {
  db.app.find({
    where: {
      id: payload.id,
    },
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
  util.debug('app read by id model');
};

// update
exports.update = (payload, err, success) => {
  db.app.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
  util.debug('app update model');
};

// delete
exports.remove = (payload, err, success) => {
  db.app.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
  util.debug('app remove model');
};
