// New config to sequelize, it add process.env support bisede to a new

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
    username: process.env.USER_NAME,
    password: '',
    database: 'divisappTEST',
    host: '',
    dialect: 'postgres',
  },
  production: {
    username: process.env.USER_NAME,
    password: process.env.PASSWORD,
    database: process.env.PRODUCTION_DB,
    host: process.env.DB_PRODUCTION_HOST,
    dialect: 'postgres',
  },
};
