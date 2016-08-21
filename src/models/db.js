// set constant of sequelize for orm
const Sequelize = require('sequelize');

// load in env file
if (!process.env.DB_HOST) require('dotenv').config();

// setting constant for envs
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_SCHEMA,
  port: process.env.DB_PORT,

// how many connections are happening to our system
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
// turn of logging
  logging: false,
});

// In db user table will be displayed as users (plural)
const user = sequelize.define('user', {
  name: {
    type: Sequelize.STRING,
  },
  age: {
    type: Sequelize.INTEGER,
  },
  hobby: {
    type: Sequelize.STRING,
  },
});

// In db app table  will be displayed as users (plural)
const app = sequelize.define('app', {
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  releaseDate: {
    type: Sequelize.DATE,
  },
});

// In db course table will be displayed as courses (plural)
const course = sequelize.define('course', {
  name: {
    type: Sequelize.STRING,
  },
  code: {
    type: Sequelize.STRING,
  },
  semester: {
    type: Sequelize.STRING,
  },
  hours: {
    type: Sequelize.DATE,
  },
  startDate: {
    type: Sequelize.DATEONLY,
  },
  endDate: {
    type: Sequelize.DATEONLY,
  },
});

// establish relation in db for user and apps
user.hasMany(app, {
  foreignKey: 'userID',
});

// establish relation in db for user and course
course.hasMany(user, {
  foreignKey: 'courseID',
});

// setup ability to reach to db to syncronize to this format
sequelize.sync();

exports.sequelize = sequelize;
exports.user = user;
exports.app = app;
exports.course = course;
