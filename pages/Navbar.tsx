import Link from 'next/link';
import router from 'next/router';
import React, { useState, useEffect, useCallback } from 'react';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [scrollY, setScrollY] = useState(0);

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
      <div
        className={`fixed z-10 flex w-full items-center overflow-hidden px-8 transition-all ease-in-out 
        ${
          showNav && scrollY != 0
            ? 'h-28 shadow-md backdrop-blur-md'
            : `${
                scrollY == 0
                  ? 'h-28 shadow-none backdrop-blur-md'
                  : 'h-0 shadow-none backdrop-blur-md'
              }`
        }`}
      >
        <div className="grid place-items-end w-full h-8">
          <div>
            <ul className="items-center flex">
              <li className="px-4 font-bold text-2xl">
                <button onClick={() => router.push('/Home')}>Home</button>
              </li>
              <li className="px-4 font-bold text-2xl">
                <button onClick={() => router.push('/About')}>About</button>
              </li>
              <li className="px-4 font-bold text-2xl">
                <button onClick={() => router.push('/Projects')}>
                  Projects
                </button>
              </li>
              <li className='px-4 font-bold text-2xl'>
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
