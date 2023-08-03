import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { Client } from 'pg';
import * as process from 'process';

const main = async () => {
  const sql = new Client(
    process.env['MIGRATION_DB_URL'] ||
      'postgres://postgres:postgres@localhost:5438/auth',
  );
  await sql.connect();
  const db = drizzle(sql);

  await migrate(db, { migrationsFolder: 'migrations' });
  await sql.end();

  return 'Schema migrated';
};

main().then(console.log).catch(console.error);
