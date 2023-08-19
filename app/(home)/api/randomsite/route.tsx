import { NextResponse } from 'next/server'

export async function GET() {
	const res = await fetch(
		'https://api.publicapis.org/random',
		{ next: { revalidate: 0 } }
	);
	const data = await res.json();
	return NextResponse.json({ data: data.entries[0] });
}

export const dynamic = 'force-dynamic';
