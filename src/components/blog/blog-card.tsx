import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { WP_REST_API_Post } from 'wp-types';

type Props = {
  post: WP_REST_API_Post & { tagNames?: string[] }; // Extend the type to include `tagNames`
  style?: 1 | 2;
};

const BlogCard = ({ post, style = 1 }: Props) => {
  return (
    <article>
      <div
        className={cn(
          'space-y-2',
          style === 1 &&
            'xl:items-baseline xl:space-y-0 xl:grid xl:grid-cols-4',
        )}>
        {/* Date */}
        <dl>
          <dt className='sr-only'>Published on</dt>
          <dd className='font-medium text-base text-muted-foreground leading-6'>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString()}
            </time>
          </dd>
        </dl>

        {/* Blog Content */}
        <div className='space-y-5 xl:col-span-3'>
          <div className='space-y-6'>
            {/* Title and Tags */}
            <div>
              {/* Title */}
              <h2 className='font-bold text-2xl leading-8 tracking-tight'>
                <Link href={`/blog/${post.slug}`} className='text-foreground'>
                  {post.title.rendered}
                </Link>
              </h2>

              {/* Tags */}
              <div className='flex flex-wrap'>
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

            {/* Description */}
            <div
              className='max-w-none text-muted-foreground prose'
              dangerouslySetInnerHTML={{ __html: post.excerpt?.rendered || '' }}
            />
          </div>

          {/* Read More */}
          <div className='font-medium text-base leading-6'>
            <Link
              href={post.link}
              className='text-teal-600 hover:text-teal-700 transition'
              aria-label={`Read more: "${post.title.rendered}"`}>
              Read more →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
