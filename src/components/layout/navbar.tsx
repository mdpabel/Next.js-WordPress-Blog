import React from 'react';
import BigScreenNavbar from './big-screen-navbar';
import SmallScreenNavbar from './small-screen-navbar';

const Navbar = () => {
  return (
    <div className='mt-4'>
      <BigScreenNavbar />
      <SmallScreenNavbar />
    </div>
  );
};

export default Navbar;
