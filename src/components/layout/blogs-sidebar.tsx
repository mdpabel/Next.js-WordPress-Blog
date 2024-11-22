import { fetchCategories } from '@/lib/wordpress/fetch-category';
import { fetchTags } from '@/lib/wordpress/fetch-tags';
import Link from 'next/link';

const BlogsSidebar = async () => {
  const categories = await fetchCategories();
  const tags = await fetchTags();

  return (
    <aside className='max-h-screen overflow-y-auto'>
      <div>
        <h3 className='pb-4 border-b border-b-neutral-400 font-semibold text-lg'>
          Categories
        </h3>
        <ul className='flex flex-row lg:flex-col flex-wrap gap-3 py-4'>
          {categories.map((category, index) => (
            <li key={index}>
              <Link
                prefetch={true}
                href={`/category/${category.slug}`}
                className='space-x-3'>
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
              <Link
                prefetch={true}
                href={`/tag/${tag.slug}`}
                className='space-x-3'>
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
