import router from 'next/router';
import React, { useState, useEffect, useCallback } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import MobileSideBar from '../src/components/mobileSideBar';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mobileSidebar, setMobileSideBar] = useState(false);

  const handleScroll = useCallback(() => {
    window.scrollY - scrollY > 0 ? setShowNav(false) : setShowNav(true);
    setScrollY(window.scrollY);
  }, [scrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="max-w-screen-lg">
      <div className={`${mobileSidebar ? 'md:hidden' : 'hidden md:hidden'}`}>
        <MobileSideBar></MobileSideBar>
      </div>
      <div
        className={`fixed z-9 flex w-full items-center overflow-hidden px-8 transition-all ease-in-out 
        ${
          showNav && scrollY != 0
            ? 'h-24 shadow-md backdrop-blur-md'
            : `${
                scrollY == 0
                  ? 'h-28 shadow-none backdrop-blur-md'
                  : 'h-0 shadow-none backdrop-blur-md'
              }`
        }`}
      >
        <div className="grid place-items-end w-full h-8">
          <div>
            <div className="flex items-center md:hidden">
              <button onClick={() => setMobileSideBar(!mobileSidebar)}>
                <MenuIcon fontSize="large" />
              </button>
            </div>
            <ul className="hidden items-center md:flex">
              <li className="px-4 font-bold text-2xl">
                <button onClick={() => router.push('/Home')}>Home</button>
              </li>
              <li className="px-4 font-bold text-2xl">
                <button onClick={() => router.push('/About')}>About</button>
              </li>
              <li className="px-4 font-bold text-2xl">
                <button onClick={() => router.push('/Experience')}>
                  Experience
                </button>
              </li>
              <li className="px-4 font-bold text-2xl">
                <button onClick={() => router.push('/Projects')}>
                  Projects
                </button>
              </li>
              <li className="px-4 font-bold text-2xl">
                <button onClick={() => router.push('/Resume')}>Resume</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
