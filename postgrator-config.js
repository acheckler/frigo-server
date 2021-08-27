require('dotenv').config()

module.exports = {
  "migrationsDirectory": "migrations",
  "driver": "pg",
  "native": "true",
  "connectionString": (process.env.NODE_ENV === 'test')
    ? process.env.TEST_DATABASE_URL
    : process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
}
const postgrator = new Postgrator(options)
postgrator.on('validation-started', (migration) => console.log(migration))
postgrator.on('validation-finished', (migration) => console.log(migration))
postgrator.on('migration-started', (migration) => console.log(migration))
postgrator.on('migration-finished', (migration) => console.log(migration))