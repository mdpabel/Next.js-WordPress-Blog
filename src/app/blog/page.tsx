import BlogList from '@/components/blog/blog-list';
import React from 'react';

export const dynamic = 'force-no-store';

const BLogsPage = () => {
  return (
    <div>
      <BlogList style={2} />
    </div>
  );
};

export default BLogsPage;
