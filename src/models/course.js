const db = require('./db');
const util = require('../../tools/util');

// create
exports.add = (payload, err, success) => {
  db.course.create(payload).then(success).catch(err);
  util.debug('course create model');
};

// read all
exports.all = (err, success) => {
  db.course.findAll().then(success).catch(err);
  util.debug('course read all model');
};

// read by id
exports.one = (payload, err, success) => {
  db.course.find({
    where: {
      id: payload.id,
    },
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
  util.debug('course read by id model');
};

// update
exports.update = (payload, err, success) => {
  db.course.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
  util.debug('course update model');
};

// delete
exports.remove = (payload, err, success) => {
  db.course.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
  util.debug('course delete model');
};
