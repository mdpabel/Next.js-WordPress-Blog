import { getPostsWithTagNames } from '@/lib/wordpress/fetch-posts';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { WP_REST_API_Post } from 'wp-types';

type Props = {
  params: Promise<{ slug: string }>;
};

const BlogPage = async ({ params }: Props) => {
  const { slug } = await params;

  // Fetch the post by slug
  const post = (await getPostsWithTagNames({
    slug,
  })) as (WP_REST_API_Post & { tagNames?: string[] }) | null;

  // Handle case where the post is not found
  if (!post) {
    return <div>Post not found</div>;
  }

  console.log(post.tagNames);

  return (
    <article className='space-y-4 mx-auto py-8 max-w-3xl'>
      {/* Date */}
      <div className='text-center text-neutral-700 dark:text-neutral-400'>
        Published on {new Date(post.date).toLocaleDateString()}
      </div>

      {/* Title */}
      <h1 className='mb-4 font-bold text-3xl'>{post.title.rendered}</h1>

      {/** Back to blog posts ------- Tags */}
      <div className='grid lg:grid-cols-2 w-full'>
        <div>
          <Link
            className='flex items-center gap-1 mr-3 font-medium text-sm text-teal-600 hover:text-teal-700 transition'
            href='/blog'>
            <ArrowLeft /> Back to the blog
          </Link>
        </div>
        <div className='flex flex-wrap justify-end'>
          {post.tagNames?.length ? (
            post.tagNames.map((tagName) => (
              <Link
                key={tagName}
                href={`/tags/${tagName}`}
                className='mr-3 font-medium text-sm text-teal-600 hover:text-teal-700 uppercase transition'>
                {tagName}
              </Link>
            ))
          ) : (
            <span className='text-muted-foreground'>No tags</span>
          )}
        </div>
      </div>

      {/* Content */}
      <div
        className='max-w-full dark:prose-invert prose'
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </article>
  );
};

export default BlogPage;
