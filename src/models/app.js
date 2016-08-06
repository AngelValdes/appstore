const db = require('./db');

// create
exports.create = (obj, errorCallback, successCallBack) => {
  db.app.create(obj).then(successCallBack).catch(errorCallback);
};

// read all
exports.all = (errorCallback, successCallBack) => {
  db.app.all().then(successCallBack).catch(errorCallback);
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
  db.app.find({
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
