import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.NEXT_PUBLIC_APPDB_HOST as string,
  port: Number(process.env.NEXT_PUBLIC_APPDB_PORT), // ✅ add port here
  user: process.env.NEXT_PUBLIC_APPDB_USER as string,
  password: process.env.NEXT_PUBLIC_APPDB_PASSWORD as string,
  database: process.env.NEXT_PUBLIC_APPDB_NAME as string,

  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;