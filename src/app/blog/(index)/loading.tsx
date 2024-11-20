import BlogCardSkeleton from '@/components/blog/blog-card-skeleton';
import React from 'react';

const BlogSkeleton = () => {
  const posts = new Array(5).fill(undefined);

  return (
    <div>
      {posts.map((_, index) => (
        <BlogCardSkeleton style={2} key={index} />
      ))}
    </div>
  );
};

export default BlogSkeleton;
