import BlogsSidebar from '@/components/layout/blogs-sidebar';
import React, { ReactNode } from 'react';

const BlogsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='mx-auto px-6 py-4 max-w-6xl'>
      <div className='flex lg:flex-row flex-col gap-10'>
        <div className='pt-8 w-full lg:w-64'>
          <BlogsSidebar />
        </div>
        <div className='w-full'>{children}</div>
      </div>
    </div>
  );
};

export default BlogsLayout;
