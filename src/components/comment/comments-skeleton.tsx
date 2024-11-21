import React from 'react';

const CommentsSkeleton = () => {
  const skeletonItems = Array.from({ length: 5 }); // Simulate 5 loading items

  return (
    <ul className='space-y-4'>
      {skeletonItems.map((_, index) => (
        <li key={index} className='animate-pulse'>
          <div className='flex items-center gap-4'>
            {/* Avatar */}
            <div className='bg-gray-300 dark:bg-gray-700 rounded-full w-12 h-12'></div>

            {/* Name and Date */}
            <div className='flex-1'>
              <div className='bg-gray-300 dark:bg-gray-700 mb-2 rounded w-1/3 h-4'></div>
              <div className='bg-gray-200 dark:bg-gray-600 rounded w-1/4 h-3'></div>
            </div>
          </div>

          {/* Comment Content */}
          <div className='space-y-2 mt-4'>
            <div className='bg-gray-300 dark:bg-gray-700 rounded h-3'></div>
            <div className='bg-gray-300 dark:bg-gray-700 rounded w-5/6 h-3'></div>
            <div className='bg-gray-300 dark:bg-gray-700 rounded w-4/6 h-3'></div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CommentsSkeleton;
