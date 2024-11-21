'use client';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const SearchForm = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  // Update the input value when the component mounts or when the query changes
  useEffect(() => {
    const currentSearch = searchParams.get('search') || '';
    setSearch(currentSearch);
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());

    if (search) {
      params.set('search', search);
    } else {
      params.delete('search');
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <Popover>
      {/* Trigger for Search */}
      <PopoverTrigger>
        <Search className='w-5 h-5 text-gray-700 hover:text-teal-600 dark:hover:text-teal-400 dark:text-gray-300 transition' />
      </PopoverTrigger>

      {/* Popover Content */}
      <PopoverContent className='border-gray-300 dark:border-gray-600 mr-20 p-2 border rounded-lg'>
        <form onSubmit={handleSearch} className='flex items-center space-x-2'>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type='text'
            placeholder='Search...'
            className='border-gray-300 dark:border-gray-600 px-4 py-1.5 border rounded-md focus:ring-2 focus:ring-teal-600 w-full focus:outline-none text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400'
          />
          <button
            type='submit'
            className='bg-teal-600 hover:bg-teal-700 py-1.5 rounded-md w-32 font-medium text-white transition'>
            Search
          </button>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default SearchForm;
