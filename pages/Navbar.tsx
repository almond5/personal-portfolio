import router from 'next/router';
import React, { useState, useEffect, useCallback } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mobileSidebar, setMobileSideBar] = useState(false);

  const handleScroll = useCallback(() => {
    window.scrollY - scrollY > 0 ? setShowNav(false) : setShowNav(true);
    setScrollY(window.scrollY);
  }, [scrollY]);

  useEffect(() => {
    const handleResize = () => {
      // Check if it's a mobile view based on the window width
      if (window.innerWidth > 768) {
        setMobileSideBar(false);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleScroll]);

  return (
    <div className="max-w-screen-lg relative z-10">
      <div className={`${mobileSidebar ? 'md:hidden' : 'hidden md:hidden'}`}>
        <div className="z-20 transition-all ease-in-out">
          <div className="z-20 fixed h-full w-full bg-black bg-opacity-25 backdrop-blur">
            <div className="z-20 fixed h-full w-8/12 bg-backgroundcolor backdrop-blur">
              <div className="flex items-center justify-end pt-8 pr-8">
                <button onClick={() => setMobileSideBar(!mobileSidebar)}>
                  <AiOutlineClose fontSize={'40'} />
                </button>
              </div>
              <div className="flex justify-center">
                <ul className="pt-20 flex flex-col text-left">
                  <li className="px-4 font-bold text-3xl py-6 ">
                    <button onClick={() => router.push('/Home')}>Home</button>
                  </li>
                  <li className="px-4 font-bold text-3xl">
                    <button onClick={() => router.push('/About')}>About</button>
                  </li>
                  <li className="px-4 font-bold text-3xl py-6">
                    <button onClick={() => router.push('/Experience')}>
                      Experience
                    </button>
                  </li>
                  <li className="px-4 font-bold text-3xl">
                    <button onClick={() => router.push('/Projects')}>
                      Projects
                    </button>
                  </li>
                  <li className="px-4 font-bold text-3xl py-6">
                    <button onClick={() => router.push('/Resume')}>
                      Resume
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed z-10 flex w-full items-center overflow-hidden px-8 transition-all ease-in-out 
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
            <div className="flex items-center sm:hidden">
              <button onClick={() => setMobileSideBar(!mobileSidebar)}>
                <MenuIcon fontSize="large" />
              </button>
            </div>
            <ul className="hidden items-center sm:flex">
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
