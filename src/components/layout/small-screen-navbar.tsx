'use client';
import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { FaBars } from 'react-icons/fa';
import Logo from './logo';
import Link from 'next/link';
import { navItems } from '@/app/data/nav-items';

const SmallScreenNavbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleMenuItemClick = () => {
    // Close the dropdown menu when a menu item is clicked
    setDropdownOpen(false);
  };

  return (
    <div className='block z-50 lg:hidden mx-auto px-4 max-w-6xl max-h-screen container'>
      <div className='flex justify-between items-center h-16'>
        <Logo />
        <div className='flex items-center space-x-5'>
          <DropdownMenu
            open={isDropdownOpen}
            onOpenChange={(open) => setDropdownOpen(open)}>
            <DropdownMenuTrigger>
              <div className='flex justify-center items-center bg-white/90 dark:bg-zinc-800/90 shadow-lg shadow-zinc-800/9 backdrop-blur rounded-full w-9 h-9'>
                <FaBars className='w-5 h-5' />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              style={{
                padding: '0 16px',
              }}
              className='mx-auto mt-2 px-4 sm:px-8 lg:px-12 w-screen'>
              <div>
                {navItems.map((item) => (
                  <DropdownMenuItem
                    key={item.href}
                    style={{
                      padding: '10px 4px',
                    }}
                    asChild
                    onClick={handleMenuItemClick}>
                    <Link
                      href={item.href}
                      className='block py-2 w-full font-medium text-sm text-zinc-800 hover:text-teal-500 dark:text-zinc-100 transition cursor-pointer'>
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default SmallScreenNavbar;
