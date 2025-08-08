import { neon } from '@neondatabase/serverless';
import fetch from 'cross-fetch'; // ✅ Add this if using Node < 18
globalThis.fetch = fetch;       // ✅ Patch global fetch for Neon SDK

const sql = neon(process.env.DATABASE_URL); // ✅ Use env variable safely

export default sql;
