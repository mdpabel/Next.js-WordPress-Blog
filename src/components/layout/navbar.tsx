import React from 'react';
import BigScreenNavbar from './big-screen-navbar';
import SmallScreenNavbar from './small-screen-navbar';

export const navItems = [
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  return (
    <div className='mt-4'>
      <BigScreenNavbar />
      <SmallScreenNavbar />
    </div>
  );
};

export default Navbar;
