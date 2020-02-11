module.exports = {
  client: 'pg',
  connection: {
    host: process.env.PG_HOST || 'localhost',
    port: process.env.PG_PORT || 5432,
    database: process.env.PG_DB_NAME,
    user: process.env.PG_USER,
    password: process.env.PG_PASS,
    timezone: 'UTC'
  },
  migrations: {
    directory: '../db/migrations'
  },
  seeds: {
    directory: '../db/seeds'
  }
};
