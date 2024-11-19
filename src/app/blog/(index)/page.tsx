import BlogList from '@/components/blog/blog-list';
import { getPostsWithTagNames } from '@/lib/wordpress/fetch-posts';
import React from 'react';
import { WP_REST_API_Posts } from 'wp-types';

export const dynamic = 'force-static';

const BLogsPage = async () => {
  const posts = (await getPostsWithTagNames()) as WP_REST_API_Posts;

  return <BlogList style={2} posts={posts} />;
};

export default BLogsPage;
