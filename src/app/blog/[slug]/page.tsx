import React from 'react';

type Props = {
  params: Promise<{ slug: string }>;
};

const BlogPage = async ({ params }: Props) => {
  const slug = (await params).slug;

  return <div>slug</div>;
};

export default BlogPage;
