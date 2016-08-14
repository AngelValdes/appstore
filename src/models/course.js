const db = require('./db');
const util = require('../../tools/util');
const colors = require('colors');

// create
exports.add = (payload, err, success) => {
  db.course.create(payload).then(success).catch(err);
  util.debug(colors.green('CREATE ') + 'Course Route hit');
};

// read all
exports.all = (err, success) => {
  db.course.findAll().then(success).catch(err);
  util.debug(colors.cyan('READ ') + 'Course Route hit');
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
  util.debug(colors.cyan('READ BY ID ') + 'Course Route hit');
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
  util.debug(colors.green('UPDATE ') + 'Course Route hit');
};

// delete
exports.remove = (payload, err, success) => {
  db.course.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
  util.debug(colors.red('DELETE ') + 'Course Route hit');
};
