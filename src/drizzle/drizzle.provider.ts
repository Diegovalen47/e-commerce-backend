import { Client } from "pg"
import { drizzle } from "drizzle-orm/node-postgres"
import * as Schema from './schema'
import { envs } from "src/config/envs"

export const DrizzleAsyncProvider = "drizzleProvider"
export const DrizzleSchemaProvider = "drizzleSchemaProvider"

export const drizzleProvider = [
  {
    provide: DrizzleAsyncProvider,
    useFactory: async () => {
      const client = new Client({
        connectionString: envs.databaseURL,
      })

      await client.connect();
      const db = drizzle(client, { schema: Schema })
      return db
    }
  },
  {
    provide: DrizzleSchemaProvider,
    useValue: Schema
  }
]