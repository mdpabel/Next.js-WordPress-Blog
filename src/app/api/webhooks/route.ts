import type { NextRequest } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function POST(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get('posts');

  if (tag) {
    revalidateTag(tag);
  }

  return Response.json({ revalidated: true, now: Date.now() });
}
