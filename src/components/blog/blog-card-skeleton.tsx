import React from 'react';
import { cn } from '@/lib/utils';

const BlogCardSkeleton = ({ style = 1 }: { style?: 1 | 2 }) => {
  return (
    <article>
      <div
        className={cn(
          'space-y-2',
          style === 1 &&
            'xl:items-baseline xl:space-y-0 xl:grid xl:grid-cols-4',
        )}>
        {/* Date Placeholder */}
        <div className='bg-gray-300 dark:bg-gray-600 rounded w-1/3 h-4'></div>

        {/* Blog Content Placeholder */}
        <div className='space-y-5 xl:col-span-3'>
          <div className='space-y-6'>
            {/* Title Placeholder */}
            <div className='bg-gray-300 dark:bg-gray-600 rounded w-3/4 h-6'></div>

            {/* Tags Placeholder */}
            <div className='flex flex-wrap gap-2'>
              <div className='bg-gray-300 dark:bg-gray-600 rounded w-1/4 h-4'></div>
              <div className='bg-gray-300 dark:bg-gray-600 rounded w-1/6 h-4'></div>
            </div>

            {/* Description Placeholder */}
            <div className='space-y-2'>
              <div className='bg-gray-300 dark:bg-gray-600 rounded w-full h-4'></div>
              <div className='bg-gray-300 dark:bg-gray-600 rounded w-5/6 h-4'></div>
              <div className='bg-gray-300 dark:bg-gray-600 rounded w-3/4 h-4'></div>
            </div>
          </div>

          {/* Read More Placeholder */}
          <div className='bg-gray-300 dark:bg-gray-600 rounded w-1/4 h-4'></div>
        </div>
      </div>
    </article>
  );
};

export default BlogCardSkeleton;
