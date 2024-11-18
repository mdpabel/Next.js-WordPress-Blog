import React from 'react';

export const dynamic = 'force-no-store';

type Props = {
  params: Promise<{ slug: string }>;
};

const BlogPage = async ({ params }: Props) => {
  const slug = (await params).slug;

  return <div>slug</div>;
};

export default BlogPage;
