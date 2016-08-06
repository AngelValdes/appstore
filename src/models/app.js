const db = require('./db');

// create
exports.create = (payload, errorCallback, successCallBack) => {
  db.app.create(payload).then(successCallBack).catch(errorCallback);
  db.app.add(payload).then(successCallBack).catch(errorCallback);
};

// read all
exports.all = (err, success) => {
  db.app.all().then(success).catch(err);
};

// read by id
exports.find = (payload, errorCallback, successCallBack) => {
  db.app.find({
    where: {
      id: payload.id,
    },
    include: [{
      all: true,
      nested: true,
    }],
  }).then(successCallBack).catch(errorCallback);
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
