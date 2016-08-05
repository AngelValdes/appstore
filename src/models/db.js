//set constant of sequelize for orm
const Sequelize = require('sequelize');

// setting constant for envs
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {});
