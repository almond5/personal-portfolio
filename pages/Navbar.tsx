import router from 'next/router';
import React, { useState, useEffect, useCallback } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import Footer from '../src/components/Footer';

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
            <div className="z-20 fixed h-full w-8/12 bg-backgroundcolor backdrop-blur flex flex-col">
              <div className="flex items-center justify-end pt-8 pr-8">
                <button onClick={() => setMobileSideBar(!mobileSidebar)}>
                  <AiOutlineClose fontSize={'30'} />
                </button>
              </div>
              <div className="flex flex-1 justify-center">
                <ul className="pt-16 flex flex-col text-left">
                  <li className="px-4 font-semibold text-3xl">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setMobileSideBar(!mobileSidebar);
                        router.push('/About');
                      }}
                    >
                      About
                    </button>
                  </li>
                  <li className="px-4 font-semibold text-3xl py-8">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setMobileSideBar(!mobileSidebar);
                        router.push('/Experience');
                      }}
                    >
                      {' '}
                      Experience
                    </button>
                  </li>
                  <li className="px-4 font-semibold text-3xl">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setMobileSideBar(!mobileSidebar);
                        router.push('/Projects');
                      }}
                    >
                      {' '}
                      Projects
                    </button>
                  </li>
                  <li className="px-4 font-semibold text-3xl py-8">
                    <Link href="/resume.pdf">Resume</Link>
                  </li>
                </ul>
              </div>
              <Footer></Footer>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed z-10 flex w-full items-center overflow-hidden px-8 transition-all ease-in-out
        ${
          showNav && scrollY != 0
            ? 'h-24 bg-backgroundcolor border-gray-400 border-b-2'
            : `${
                scrollY == 0
                  ? 'h-28 bg-backgroundcolor border-gray-400 border-b-2'
                  : 'h-0 bg-backgroundcolor border-gray-400 border-b-2'
              }`
        }`}
      >
        <div className="font-bold text-3xl text-left sm:p-3 w-full xs:flex ">
          <button className="" onClick={() => router.push('/Home')}>
            Adrian Hossen
          </button>
        </div>
        <div className="grid place-items-end h-8">
          <div>
            <div className="flex items-center md:hidden">
              <button onClick={() => setMobileSideBar(!mobileSidebar)}>
                <MenuIcon fontSize="large" />
              </button>
            </div>
            <ul className="hidden items-center md:flex">
              <li className="px-4 font-semibold text-2xl">
                <button onClick={() => router.push('/About')}>About</button>
              </li>
              <li className="px-4 font-semibold text-2xl">
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
                <Link href="/resume.pdf">Resume</Link>{' '}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
