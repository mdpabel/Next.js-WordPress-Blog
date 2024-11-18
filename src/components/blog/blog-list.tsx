import React from 'react';
import BlogCard from './blog-card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const posts = [
  {
    title: 'Release of Tailwind Nextjs Starter Blog v2.0',
    date: 'August 5, 2023',
    datetime: '2023-08-05T00:00:00.000Z',
    description:
      'Release of Tailwind Nextjs Starter Blog template v2.0, refactored with Nextjs App directory and React Server Components setup. Discover the new features and how to migrate from V1.',
    tags: ['next-js', 'tailwind', 'guide', 'feature'],
    href: '/blog/release-of-tailwind-nextjs-starter-blog-v2.0',
  },
  {
    title: 'New features in v1',
    date: 'August 7, 2021',
    datetime: '2021-08-07T15:32:14.000Z',
    description:
      'An overview of the new features released in v1 - code block copy, multiple authors, frontmatter layout and more.',
    tags: ['next-js', 'tailwind', 'guide'],
    href: '/blog/new-features-in-v1',
  },
  {
    title: 'Introducing Multi-part Posts with Nested Routing',
    date: 'May 2, 2021',
    datetime: '2021-05-02T00:00:00.000Z',
    description:
      'The blog template supports posts in nested sub-folders. This can be used to group posts of similar content e.g., a multi-part course. This post is itself an example of a nested route!',
    tags: ['multi-author', 'next-js', 'feature'],
    href: '/blog/nested-route/introducing-multi-part-posts-with-nested-routing',
  },
  {
    title: 'Introducing Tailwind Nextjs Starter Blog',
    date: 'January 12, 2021',
    datetime: '2021-01-12T00:00:00.000Z',
    description:
      'Looking for a performant, out-of-the-box template, with all the best in web technology to support your blogging needs? Check out the Tailwind Nextjs Starter Blog template.',
    tags: ['next-js', 'tailwind', 'guide'],
    href: '/blog/introducing-tailwind-nextjs-starter-blog',
  },
  {
    title: 'Deriving the OLS Estimator',
    date: 'December 21, 2020',
    datetime: '2020-12-21T00:00:00.000Z',
    description:
      'How to derive the OLS Estimator with matrix notation and a tour of math typesetting using markdown with the help of KaTeX.',
    tags: ['next-js', 'math', 'ols'],
    href: '/blog/deriving-ols-estimator',
  },
];

const BlogList = ({ style = 1 }: { style?: 1 | 2 }) => {
  return (
    <div>
      <ul>
        {posts.map((post, index) => (
          <li
            key={index}
            className={cn(
              'py-12',
              index !== posts.length - 1 && 'border-b-neutral-400 border-b',
            )}>
            <BlogCard style={style} post={post} />
          </li>
        ))}
      </ul>

      <div className='flex justify-end pt-6'>
        <Link href='/blog' className='flex items-center gap-2 text-teal-600'>
          All Posts <ArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default BlogList;
