import React, { Suspense } from 'react';
import ThemeSwitcher from '../common/theme-switcher';
import Link from 'next/link';
import SearchForm from '../common/search-form';
import Logo from './logo';
import { navItems } from '@/app/data/nav-items';

const BigScreenNavbar = () => {
  return (
    <nav className='lg:block hidden bg-background'>
      <div className='flex justify-between items-center mx-auto px-6 py-4 max-w-6xl'>
        {/* Left Side: Logo */}
        <Logo />

        {/* Right Side: Nav Items, Search, and Theme Switcher */}
        <div className='flex items-center space-x-6'>
          {/* Navigation Links */}
          <ul className='flex space-x-8'>
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  prefetch={true}
                  href={item.href}
                  className='font-medium text-foreground hover:text-accent-foreground hover:text-teal-600 transition'>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Search Icon */}
          <Suspense>
            <SearchForm />
          </Suspense>

          {/* Theme Switcher */}
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default BigScreenNavbar;
