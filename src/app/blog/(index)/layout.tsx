import BlogsSidebar from '@/components/layout/blogs-sidebar';
import React, { ReactNode } from 'react';

const BlogsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='mx-auto px-6 py-4 max-w-6xl'>
      <div className='flex lg:flex-row flex-col gap-10'>
        {/* Sidebar */}
        <div className='lg:top-4 lg:sticky w-full lg:w-96 lg:h-[100dvh] overflow-auto'>
          <BlogsSidebar />
        </div>

        {/* Main Content */}
        <div className='flex flex-col w-full'>{children}</div>
      </div>
    </div>
  );
};

export default BlogsLayout;
