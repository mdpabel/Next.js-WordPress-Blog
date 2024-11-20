import BlogList from '@/components/blog/blog-list';
import Pagination from '@/components/common/pagination';
import { getPostsWithTagNames } from '@/lib/wordpress/fetch-posts';
import React from 'react';

export const dynamic = 'force-static';

const POSTS_PER_PAGE = 5;

type Props = {
  searchParams: Promise<{ page: string }>;
};

const BLogsPage = async ({ searchParams }: Props) => {
  const page = parseInt((await searchParams).page || '1', 10);

  const { posts, total } = await getPostsWithTagNames({
    perPage: POSTS_PER_PAGE,
    page: page,
  });

  const totalPages = Math.ceil(total / POSTS_PER_PAGE);

  // Ensure posts is an array before passing it to BlogList
  if (!Array.isArray(posts)) {
    throw new Error('Expected posts to be an array');
  }

  console.log(posts.length);

  return (
    <div>
      <BlogList style={2} posts={posts} />
      <Pagination totalPages={totalPages} />
    </div>
  );
};

export default BLogsPage;
