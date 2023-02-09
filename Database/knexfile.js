// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
		  host: 'nodus.caseguru.ru',
		 port: 5432,
		 database: 'testtask',
		 user:     'trainee_user',
		 password: 'trainee_pass'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
};
