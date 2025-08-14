// endpoint used to verify the status of the application (e.g. for Vercel)

// NextResponse -> creates a proper HTTP response with a JSON body
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // ensures the endpoint always shows the current state of service, prevents stale responses from cache
export const runtime = 'nodejs'; // explicit: good for future edge/node choices -> process.env

// creates a GET endpoint that returns a JSON response with the current state of the service
export async function GET() {
  return NextResponse.json({
    ok: true,
    service: 'covr',
    version: process.env.NEXT_PUBLIC_APP_VERSION ?? 'dev',
    ts: new Date().toISOString(),
  });
}
