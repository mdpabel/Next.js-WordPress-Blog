import BlogCardSkeleton from '@/components/blog/blog-card-skeleton';
import BlogList from '@/components/blog/blog-list';
import Pagination from '@/components/common/pagination';
import { getPostsWithTagNames } from '@/lib/wordpress/fetch-posts';
import { Suspense } from 'react';
import BlogSkeleton from './loading';

const POSTS_PER_PAGE = 5;

type Props = {
  searchParams: Promise<{ page: string }>;
};

const BLogsPage = async ({ searchParams }: Props) => {
  const { page } = await searchParams;

  const { posts, total } = await getPostsWithTagNames({
    perPage: POSTS_PER_PAGE,
    page: +page,
  });

  const totalPages = Math.ceil(total / POSTS_PER_PAGE);

  // Ensure posts is an array before passing it to BlogList
  if (!Array.isArray(posts)) {
    throw new Error('Expected posts to be an array');
  }

  return (
    <Suspense key={page} fallback={<BlogSkeleton />}>
      <BlogList style={2} posts={posts} />
      <Pagination totalPages={totalPages} />
    </Suspense>
  );
};

export default BLogsPage;
