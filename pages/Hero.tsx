import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <div id='home' className='py-80 flex-col justify-center text-center'>
      <div className='mb-3 text-2xl leading-2;'>Hello, my name is</div>
      <div className='mb-5 text-5xl font-semibold xs:text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl'>
        Adrian Hossen.
      </div>
      <div className='mx-auto max-w-md text-md text-left lg:text-xl'>
        I am a software developer with a growth mindset who is always eager to
        learn more. I love programming and sharing my knowledge with others!
        Please contact me with any questions or if you just wish to chat.
      </div>
      <div className='py-10 mx-auto max-w-2xl'>
        <Link href='mailto:adrianhossen5@gmail.com'>
          <a
            className='mx-auto rounded-full w-max border border-gray-800 px-6 py-3 
          font-bold transition hover:bg-gray-500 hover:text-gray-800'
          >
            Contact Me
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
