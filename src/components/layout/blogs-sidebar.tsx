import Link from 'next/link';
import React from 'react';

type Tag = {
  name: string;
  count: number;
};

type Category = {
  name: string;
  href: string;
};

type SidebarProps = {
  tags: Tag[];
  categories: Category[];
};

const tags = [
  { name: 'Sports', count: 10, href: '/' },
  { name: 'Books', count: 12, href: '/' },
  { name: 'Technology', count: 8, href: '/' },
  { name: 'Health', count: 5, href: '/' },
];

const categories = [
  { name: 'Lifestyle', href: '/categories/lifestyle', count: 10 },
  { name: 'Education', href: '/categories/education', count: 10 },
  { name: 'Entertainment', href: '/categories/entertainment', count: 10 },
  { name: 'Finance', href: '/categories/finance', count: 10 },
];

const BlogsSidebar = () => {
  return (
    <aside className='max-h-screen overflow-y-auto'>
      <div>
        <h3 className='pb-4 border-b border-b-neutral-400 font-semibold text-lg'>
          Categories
        </h3>
        <ul className='flex flex-row lg:flex-col flex-wrap gap-3 py-4'>
          {categories.map((category, index) => (
            <li key={index}>
              <Link href={category.href} className='space-x-3'>
                <span>{category.name}</span>
                <span className='font-semibold text-teal-600'>
                  ({category.count})
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className='pb-4 border-b border-b-neutral-400 font-semibold text-lg'>
          Tags
        </h3>
        <ul className='flex flex-row lg:flex-col flex-wrap gap-3 py-4'>
          {tags.map((tag, index) => (
            <li key={index}>
              <Link href={tag.href} className='space-x-3'>
                <span>{tag.name}</span>
                <span className='font-semibold text-teal-600'>
                  ({tag.count})
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default BlogsSidebar;
