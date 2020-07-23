// New config to sequelize, it add process.env support bisede to a new

const fs = require('fs');
const path = require('path');

//

CERT = fs
  .readFileSync(path.join(__dirname, './cert/rds-ca-2019-root.pem'))
  .toString();

module.exports = {
  development: {
    username: null,
    password: null,
    database: 'developmentDB',
    host: '127.0.0.1',
    dialect: 'sqlite',
    storage: '/home/renny/nodeProjects/own/calcRate/src/developmentDB.sqlite3',
  },
  test: {
    username: process.env.TEST_USER_NAME,
    password: process.env.TEST_PASSWORD,
    database: process.env.TEST_PRODUCTION_DB,
    host: process.env.TEST_DB_PRODUCTION_HOST,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: true,
        ca: CERT,
      },
    },
  },
  production: {
    username: process.env.USER_NAME,
    password: process.env.PASSWORD,
    database: process.env.PRODUCTION_DB,
    host: process.env.DB_PRODUCTION_HOST,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: true,
        ca: CERT,
        connectionTimeoutMillis: 10,
      },
    },
  },
};
