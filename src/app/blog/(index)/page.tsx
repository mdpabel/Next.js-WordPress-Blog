import { genPageMetadata } from '@/app/seo';
import Blogs from '@/components/blog/blogs';

export const dynamic = 'force-static';

type Props = {
  searchParams: Promise<{ page: string; search: string }>;
};

export const metadata = genPageMetadata({ title: 'Blog' });

const page = async ({ searchParams }: Props) => {
  const { page, search } = await searchParams;

  return <Blogs page={+page} search={search} />;
};

export default page;
