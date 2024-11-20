import BlogCardSkeleton from '@/components/blog/blog-card-skeleton';
import BlogList from '@/components/blog/blog-list';
import Newsletter from '@/components/common/news-letter';
import { getSiteIcon } from '@/lib/wordpress/fetch-assets';
import { getPostsWithTagNames } from '@/lib/wordpress/fetch-posts';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-static';

const HomePageSkeleton = async () => {
  const posts = new Array(10).fill(undefined);

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

      {posts.map((_, index) => (
        <BlogCardSkeleton key={index} />
      ))}
      <div className='flex justify-end pt-6'>
        <Link href='/blog' className='flex items-center gap-2 text-teal-600'>
          All Posts <ArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default HomePageSkeleton;
