'use client';
import { useDebounce } from 'use-debounce';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { formatDate } from '@/lib/utils';
import { getPostsWithTagNames } from '@/lib/wordpress/fetch-posts';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { WP_REST_API_Posts } from 'wp-types';
import Spinner from './spinner';

const SearchForm = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState<WP_REST_API_Posts>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [value] = useDebounce(search, 300);

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);
      try {
        const { posts, total } = await getPostsWithTagNames({
          search: value,
        });
        if (Array.isArray(posts)) {
          setPosts(posts as WP_REST_API_Posts);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getPosts();
  }, [value]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          aria-label='Search'
          className='hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-full transition'>
          <Search className='w-5 h-5 text-gray-700 hover:text-teal-600 dark:hover:text-teal-400 dark:text-gray-300 transition' />
        </button>
      </DialogTrigger>

      <DialogContent className='sm:max-w-[425px] lg:max-w-[550px]'>
        <DialogHeader>
          <DialogTitle>
            <div className='flex items-center border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-3 py-2 border rounded-md focus-within:ring-2 focus-within:ring-teal-500'>
              {isLoading ? (
                <Spinner className='mr-2 w-5 h-5 text-gray-400 dark:text-gray-500' />
              ) : (
                <Search className='mr-2 w-5 h-5 text-gray-400 dark:text-gray-500' />
              )}
              <input
                type='text'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Type to search...'
                className='bg-transparent w-full text-gray-800 text-sm dark:text-gray-200 outline-none placeholder-gray-400'
              />
            </div>
          </DialogTitle>
          <DialogDescription className='mt-2 text-gray-500 text-sm dark:text-gray-400'>
            Start typing to search. Press <kbd>ESC</kbd> to close.
          </DialogDescription>
        </DialogHeader>

        <div className='py-4'>
          <ul className='max-h-[250px] overflow-y-scroll'>
            {posts?.map((post) => (
              <li
                key={post.id}
                className='hover:bg-teal-100 dark:hover:bg-teal-800 p-4 rounded-md transition'>
                <Link
                  href={`/blog/${post.slug}`}
                  onClick={() => setOpen(false)} // Close dialog on click
                >
                  <div>
                    <dl>
                      <dt className='sr-only'>Published on</dt>
                      <dd className='font-medium text-base text-muted-foreground leading-6'>
                        <time dateTime={post.date}>
                          {formatDate(post.date)}
                        </time>
                      </dd>
                    </dl>
                    <h3 className='text-sm'>{post.title.rendered}</h3>
                  </div>
                </Link>
              </li>
            ))}
            {isLoading && (
              <li className='py-4 text-center text-gray-500'>
                <Spinner />
              </li>
            )}
            {!isLoading && !posts.length && (
              <li className='py-4 text-center text-gray-500'>
                No results found.
              </li>
            )}
          </ul>
        </div>

        <DialogFooter>
          <div className='flex flex-wrap justify-start items-center gap-2 text-sm'>
            <span className='text-gray-500 dark:text-gray-400'>
              Try searching for:
            </span>
            <Button
              variant='link'
              size='sm'
              onClick={() => setSearch('Malware Removal')}
              className='px-2 py-1 text-teal-600 dark:text-teal-400'>
              Malware Removal
            </Button>
            <Button
              variant='link'
              size='sm'
              onClick={() => setSearch('WordPress')}
              className='px-2 py-1 text-teal-600 dark:text-teal-400'>
              WordPress
            </Button>
            <Button
              variant='link'
              size='sm'
              onClick={() => setSearch('Security')}
              className='px-2 py-1 text-teal-600 dark:text-teal-400'>
              Security
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SearchForm;
