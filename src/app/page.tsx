import BlogList from '@/components/blog/blog-list';
import Newsletter from '@/components/common/news-letter';
import { getPostsWithTagNames } from '@/lib/wordpress/fetch-posts';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import PreloadResources from './preload-resources';

export const dynamic = 'force-static';

type Props = {
  searchParams: Promise<{ search: string }>;
};

const HomePage = async ({ searchParams }: Props) => {
  const { search } = await searchParams;
  const { posts } = await getPostsWithTagNames({
    categorySlug: 'featured',
    perPage: 100,
    page: 1,
    search,
  });

  // Ensure posts is an array before passing it to BlogList
  if (!Array.isArray(posts)) {
    throw new Error('Expected posts to be an array');
  }

  return (
    <div className='mx-auto px-6 py-4 max-w-6xl'>
      <div className='space-y-2 md:space-y-5 pt-6 pb-8 border-b border-b-neutral-400'>
        <h1 className='font-extrabold text-3xl text-foreground sm:text-4xl md:text-6xl leading-9 sm:leading-10 md:leading-14 tracking-tight'>
          Next Generation WodPress
        </h1>
        <p className='text-lg text-muted-foreground leading-7'>
          Stay updated with the latest trends, insights, and stories from the
          digital world.
        </p>
      </div>
      <BlogList posts={posts} />
      <div className='flex justify-end pt-6'>
        <Link href='/blog' className='flex items-center gap-2 text-teal-600'>
          All Posts <ArrowRight />
        </Link>
      </div>
      <Newsletter />
      <PreloadResources />
    </div>
  );
};

export default HomePage;
