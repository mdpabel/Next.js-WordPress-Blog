import Blogs from '@/components/blog/blogs';

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page: string; search: string }>;
};

const page = async ({ params, searchParams }: Props) => {
  const { page, search } = await searchParams;
  const { slug } = await params;

  return <Blogs page={+page} categorySlug={slug} search={search} />;
};

export default page;
