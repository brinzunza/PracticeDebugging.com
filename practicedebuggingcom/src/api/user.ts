// import { Client } from 'pg';

// const DATABASE_URL='postgresql://debuggingproblems_owner:npg_vdHcOiNwK82F@ep-ancient-glitter-a5yvybcf-pooler.us-east-2.aws.neon.tech/debuggingproblems?sslmode=require'

// const client = new Client({
//   connectionString: DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false
//   }
// });

// client.connect();

// export interface User {
//   name: string;
//   email: string;
// }

// export async function createUser(name: string, email: string): Promise<User> {
//   const result = await client.query(
//     'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
//     [name, email]
//   );
//   return result.rows[0];
// }

// export async function findUserByEmail(email: string): Promise<User | null> {
//   const result = await client.query('SELECT * FROM users WHERE email = $1', [email]);
//   return result.rows[0] || null;
// } 
