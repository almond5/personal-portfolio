import Link from 'next/link';
import React from 'react';
import styles from '../styles/home.module.css';
import Footer from '../src/components/Footer';

const Home = () => {
  return (
    <div id="home" className="pt-60 min-h-screen flex flex-col">
      <div className="pl-6 flex flex-col md:flex-row justify-center gap-16 flex-1">
        <div className="pr-6">
          <div className="mb-3 text-3xl leading-2">Greetings, my name is</div>
          <div
            className="mb-5 text-5xl font-semibold xs:text-5xl sm:text-5xl md:text-5xl 
              lg:text-6xl xl:text-6xl"
          >
            Adrian Hossen.
          </div>
          <div
            className="text-2xl text-left xs:max-w-sm sm:max-w-sm md:max-w-sm 
            lg:max-w-md xl:max-w-md"
          >
            I am a software developer with a growth mindset who is always eager
            to learn more. I love programming and sharing my knowledge with
            others! Please contact me with any questions or if you just wish to
            chat.
          </div>
          <div className="pt-14 mx-auto max-w-2xl px-1">
            <button>
              <Link href="mailto:adrianhossen4@gmail.com">
                <div
                  className="rounded-2xl w-max border-4 border-neutral-100 px-6 py-3 
            font-bold transition hover:bg-gray-500 hover:text-gray-200 text-xl"
                >
                  Contact Me
                </div>
              </Link>
            </button>
          </div>
        </div>
        <div className="pr-6 pt-3 pb-14 mx-auto sm:mx-0 md:mx-0">
          <img src="me.jpg" className={styles.card} alt="Adrian Hossen"></img>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
