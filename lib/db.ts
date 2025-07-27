import { neonConfig, Pool } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from 'ws';

// Configure Neon
neonConfig.webSocketConstructor = ws;
neonConfig.poolQueryViaFetch = true;

// Type definitions
declare global {
  // eslint-disable-next-line no-var
  var db: ReturnType<typeof drizzle> | undefined;
}

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is not set');
}

const pool = new Pool({ connectionString });

// Create Drizzle instance
const db = global.db || drizzle(pool);

if (process.env.NODE_ENV === 'development') {
  global.db = db;
}

export default db; 