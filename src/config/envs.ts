import 'dotenv/config'

export const envs = {
  databaseURL: process.env.DATABASE_URL,
  databasePort: process.env.DATABASE_PORT,
  databaseUser: process.env.POSTGRES_USER,
  databasePassword: process.env.POSTGRES_PASSWORD,
  databaseName: process.env.POSTGRES_DB,
}