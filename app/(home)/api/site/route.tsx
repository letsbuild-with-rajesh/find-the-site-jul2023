import { NextRequest, NextResponse } from 'next/server'
import conn from '@/app/lib/db'

export async function GET() {
  try {
    const query = 'SELECT DETAILS FROM SITES';
    const result = await conn.query(query);
    return NextResponse.json({ data: result.rows });
  } catch (error) {
    console.error(error);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { Link } = body;
    const query = 'INSERT INTO SITES (DOMAIN, DETAILS) VALUES ($1, $2) ON CONFLICT (DOMAIN) DO NOTHING';
    const values = [Link, body];
    await conn.query(query, values);
    return NextResponse.json({ result: "success" });
  } catch (error) {
    console.error(error);
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    const { domain } = body;
    const query = 'DELETE FROM SITES WHERE DOMAIN=$1';
    const values = [domain];
    await conn.query(query, values);
    return NextResponse.json({ result: "success" });
  } catch (error) {
    console.error(error);
  }
}
