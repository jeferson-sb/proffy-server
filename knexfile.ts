import config from './src/config';

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: config.dbName,
      user: config.dbUser,
      password: config.dbPassword,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './src/database/migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './src/database/migrations',
    },
  },
};
