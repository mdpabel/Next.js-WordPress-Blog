import React from 'react';
import { FaWordpress } from 'react-icons/fa'; // WordPress Icon
import { AiOutlineRocket } from 'react-icons/ai'; // Rocket Icon for "NextGen"
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/'>
      <div className='flex items-center space-x-1'>
        <AiOutlineRocket className='w-8 h-8 text-teal-600' />
        <FaWordpress className='w-8 h-8 text-blue-600 dark:text-blue-50' />
      </div>
    </Link>
  );
};

export default Logo;
