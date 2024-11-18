import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

type Props = {
  post: {
    title: string;
    date: string;
    datetime: string;
    description: string;
    tags: string[];
    href: string;
  };
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
            <time dateTime={post.datetime}>{post.date}</time>
          </dd>
        </dl>

        {/* Blog Content */}
        <div className='space-y-5 xl:col-span-3'>
          <div className='space-y-6'>
            {/* Title and Tags */}
            <div>
              {/* Title */}
              <h2 className='font-bold text-2xl leading-8 tracking-tight'>
                <Link href={post.href} className='text-foreground'>
                  {post.title}
                </Link>
              </h2>

              {/* Tags */}
              <div className='flex flex-wrap'>
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/tags/${tag}`}
                    className='mr-3 font-medium text-sm text-teal-600 hover:text-teal-700 uppercase transition'>
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className='max-w-none text-muted-foreground prose'>
              {post.description}
            </div>
          </div>

          {/* Read More */}
          <div className='font-medium text-base leading-6'>
            <Link
              href={post.href}
              className='text-teal-600 hover:text-teal-700 transition'
              aria-label={`Read more: "${post.title}"`}>
              Read more →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
