const { Sequelize } = require('sequelize');

const { config } = require('./../config/config');
const setupModels = require('./../db/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
// const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  // disable logging,default: console.log,
  dialect: 'postgres',
  // dialect: 'mysql',
  logging: false,
});

setupModels(sequelize);
// sequelize.sync se dasabita en modo desarrollo
// sequelize.sync();

module.exports = sequelize;
