import { NextResponse } from 'next/server';

export function GET() {
  return new Response('Hello, Next.js!', {
    status: 200,
    headers: {},
  });
}
