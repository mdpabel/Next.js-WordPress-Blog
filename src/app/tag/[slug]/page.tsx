import Blogs from '@/components/blog/blogs';
import { generateTitleFromSlug } from '@/lib/utils';
import { fetchTags } from '@/lib/wordpress/fetch-tags';
import { Metadata } from 'next';
import { WP_REST_API_Tag } from 'wp-types';

export async function generateMetadata({
  params,
}: Props): Promise<Metadata | undefined> {
  const { slug } = await params;

  return {
    title: generateTitleFromSlug(slug),
  };
}

export async function generateStaticParams() {
  const tags = await fetchTags();

  // Ensure posts is an array before passing it to BlogList
  if (!Array.isArray(tags)) {
    return [];
  }

  return tags.map((tag: WP_REST_API_Tag) => ({
    slug: tag.slug,
  }));
}

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
