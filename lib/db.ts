import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.APPDB_HOST as string,
  port: Number(process.env.APPDB_PORT), // ✅ add port here
  user: process.env.APPDB_USER as string,
  password: process.env.APPDB_PASSWORD as string,
  database: process.env.APPDB_NAME as string,

  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;