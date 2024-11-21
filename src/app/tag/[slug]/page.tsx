import Blogs from '@/components/blog/blogs';

export const dynamic = 'force-static';

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page: string; search: string }>;
};

const page = async ({ params, searchParams }: Props) => {
  const { page, search } = await searchParams;

  const { slug } = await params;

  return <Blogs page={+page} tagSlug={slug} search={search} />;
};

export default page;
