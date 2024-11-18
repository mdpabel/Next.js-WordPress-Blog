import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Search } from 'lucide-react';

const SearchForm = () => {
  return (
    <Popover>
      {/* Trigger for Search */}
      <PopoverTrigger>
        <Search className='w-5 h-5 text-gray-700 hover:text-teal-600 dark:hover:text-teal-400 dark:text-gray-300 transition' />
      </PopoverTrigger>

      {/* Popover Content */}
      <PopoverContent className='border-gray-300 dark:border-gray-600 mr-20 p-2 border rounded-lg'>
        <form action='' className='flex items-center space-x-2'>
          <input
            type='text'
            placeholder='Search...'
            className='border-gray-300 dark:border-gray-600 px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-600 w-full focus:outline-none text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400'
          />
          <button
            type='submit'
            className='bg-teal-600 hover:bg-teal-700 px-3 py-2 rounded-md font-medium text-white transition'>
            Go
          </button>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default SearchForm;
