import type { Config } from 'drizzle-kit';

export default {
  schema: './src/schema/schema.ts',
  out: './migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: 'postgres://postgres:postgres@localhost:5438/auth',
  },
} satisfies Config;
