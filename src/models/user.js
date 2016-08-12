const db = require('./db');
const util = require('../../tools/util');

// create
exports.add = (payload, err, success) => {
  db.user.create(payload).then(success).catch(err);
  util.debug('user create model');
};

// read all
exports.all = (err, success) => {
  db.user.findAll().then(success).catch(err);
  util.debug('user read all model');
};

// read by id
exports.one = (payload, err, success) => {
  db.user.find({
    where: {
      id: payload.id,
    },
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
  util.debug('user read by id model');
};

// update
exports.update = (payload, err, success) => {
  db.user.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
  util.debug('user update model');
};

// delete
exports.remove = (payload, err, success) => {
  db.user.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
  util.debug('user delete model');
};
