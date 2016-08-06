const db = require('./db');

// create
exports.create = (payload, err, success) => {
  db.user.create(payload).then(success).catch(err);
};

// read all
exports.all = (errorCallback, successCallBack) => {
  db.user.all().then(successCallBack).catch(errorCallback);
};

// read by id
exports.find = (payload, err, success) => {
  db.user.find({
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
  db.user.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
};

// delete
exports.destroy = (payload, err, success) => {
  db.user.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
};
