import BlogList from '@/components/blog/blog-list';
import React from 'react';

export const dynamic = 'force-static';

const BLogsPage = () => {
  return (
    <div>
      <BlogList style={2} />
    </div>
  );
};

export default BLogsPage;
