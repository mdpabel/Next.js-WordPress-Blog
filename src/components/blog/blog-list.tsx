import React from 'react';
import BlogCard from './blog-card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { WP_REST_API_Posts } from 'wp-types';

const BlogList = ({
  style = 1,
  posts,
}: {
  style?: 1 | 2;
  posts: WP_REST_API_Posts;
}) => {
  return (
    <div>
      <ul>
        {posts.map((post, index) => (
          <li
            key={index}
            className={cn(
              'py-12',
              index !== posts.length - 1 && 'border-b-neutral-400 border-b',
            )}>
            <BlogCard style={style} post={post} />
          </li>
        ))}
      </ul>

      <div className='flex justify-end pt-6'>
        <Link href='/blog' className='flex items-center gap-2 text-teal-600'>
          All Posts <ArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default BlogList;
