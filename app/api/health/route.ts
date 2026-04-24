import pool from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET() {
    try{
      await pool.query("SELECT 1");

    return NextResponse.json({
      status: "ok",
      database: "connected",
    });

    } catch (error) {
        console.error("Error occurred while checking database connection:", error);
        return NextResponse.json({ error: "Failed to connect to database" }, { status: 500 });
    }
}