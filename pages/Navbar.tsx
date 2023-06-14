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
    <div className='max-w-screen-lg'>
      <div
        className={`fixed z-10 flex w-full items-center overflow-hidden px-8 transition-all ease-in-out
        ${
          showNav && scrollY != 0
            ? 'h-28 shadow-md backdrop-blur'
            : `${
                scrollY == 0
                  ? 'h-24 shadow-none backdrop-blur-0'
                  : 'h-0 shadow-none backdrop-blur'
              }`
        }`}
      >
        <div className='grid place-items-end w-full h-8 2xl:px-5'>
          <div>
            <ul className='hidden items-center md:flex'>
              <li className='px-4 font-bold text-xl'>
                <button onClick={() => router.push('/Hero')}>Home</button>
              </li>
              <li className='px-4 font-bold text-xl'>
                <button onClick={() => router.push('/About')}>About</button>
              </li>
              <li className='px-4 font-bold text-xl'>
                <button onClick={() => router.push('/Projects')}>Projects</button>
              </li>
              <li className='px-4 font-bold text-xl'>
                <Link href='mailto:adrianhossen4@gmail.com'>Contact</Link>
              </li>
              <li className='px-4 font-bold text-xl'>
                <Link href='resume.pdf'>Resume</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
