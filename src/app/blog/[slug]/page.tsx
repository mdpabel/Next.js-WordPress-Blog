import Comments from '@/components/comment/comments';
import CommentsSkeleton from '@/components/comment/comments-skeleton';
import { getPosts, getPostsWithTagNames } from '@/lib/wordpress/fetch-posts';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React, { Suspense } from 'react';
import { WP_REST_API_Post } from 'wp-types';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  const { posts } = await getPosts();

  // Ensure posts is an array before passing it to BlogList
  if (!Array.isArray(posts)) {
    return [];
  }

  return posts.map((post: WP_REST_API_Post) => ({
    slug: post.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

const BlogPage = async ({ params }: Props) => {
  const { slug } = await params;

  // Fetch the post by slug
  const { posts } = await getPostsWithTagNames({
    slug,
  });

  // Ensure `posts` is a single post
  const post = (Array.isArray(posts) ? posts[0] : posts) as WP_REST_API_Post & {
    tagDetails?: { name: string; slug: string }[];
  };
  // Handle case where the post is not found
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className='space-y-4 mx-auto py-8 max-w-3xl'>
      {/* Date */}
      <div className='text-neutral-500 dark:text-neutral-400'>
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
          {post.tagDetails?.length ? (
            post.tagDetails.map(({ name, slug }) => (
              <Link
                key={slug}
                href={`/tags/${slug}`}
                className='mr-3 font-medium text-sm text-teal-600 hover:text-teal-700 uppercase transition'>
                {name}
              </Link>
            ))
          ) : (
            <span className='text-muted-foreground'>No tags</span>
          )}
        </div>
      </div>

      {/* Content */}
      <div
        className='pb-10 border-b border-b-neutral-400 max-w-full dark:prose-invert prose'
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />

      <Suspense fallback={<CommentsSkeleton />}>
        {/* Comments */}
        <Comments postId={post.id} />
      </Suspense>
    </article>
  );
};

export default BlogPage;
