const db = require('./db');
const util = require('../../tools/util');
const colors = require('colors');

// create
exports.add = (payload, err, success) => {
  db.app.create(payload).then(success).catch(err);
  util.debug(colors.green('App created'));
};

// read all
exports.all = (err, success) => {
  db.app.findAll().then(success).catch(err);
  util.debug(colors.blue('read all App'));
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
  util.debug(colors.blue('read App by id'));
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
  util.debug(colors.green('App updated'));
};

// delete
exports.remove = (payload, err, success) => {
  db.app.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
  util.debug(colors.red('App deleted'));
};
