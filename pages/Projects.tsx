import Link from 'next/link';
import React from 'react';

const Projects = () => {
  return (
    <div className='flex-col text-center py-60'>
      <div className='mx-auto max-w-lg'>
        <p className='mb-3 text-3xl text-left font-bold'>Projects</p>
      </div>
      <ul className='px-48 py-6 grid auto-grid gap-1 md:grid-cols-2 lg:grid-cols-2'>
        <li
          className='h-72 w-72 auto-grid flex flex-col outline bg-stone-100 
            p-7 transition-transform hover:-translate-y-2 rounded-xl'
        >
          <Link href='https://github.com/adrianhossen5/ty'>
            <a target='_blank'>
              <div className='mb-1 text-lg font-bold'>Ty Bot</div>
              <p className='py mb-4 text-md text-left'>
                Contributed to the UCF Knights Discord Server’s bot by
                developing a birthday feature. Connected the bot to a
                planetscale database for user profile storage (birthdays).
              </p>
              <ul className='grid grid-cols-2 whitespace-nowrap text-md text-left'>
                <li className='list-inside list-disc'>JavaScript</li>
                <li className='list-inside list-disc'>PlanetScale DB</li>
                <li className='list-inside list-disc'>TypeScript</li>
                <li className='list-inside list-disc'>Node.js</li>
                <li className='list-inside list-disc'>Prisma</li>
              </ul>
            </a>
          </Link>
        </li>
        <li
          className='h-72 w-72 auto-grid flex flex-col outline bg-stone-100 
            p-7 transition-transform hover:-translate-y-2 rounded-xl'
        >
          <Link href='https://github.com/adrianhossen5/PlsBot'>
            <a target='_blank'>
              <div className='mb-1 text-lg font-bold'>Pls Bot</div>
              <p className='mb-4 text-md text-left'>
                Leveraged Tenor API in conjunction with the fetch() function to
                create a Discord bot that delivers specific gifs based on users’
                requests within a server.
              </p>
              <ul className='grid grid-cols-2 whitespace-nowrap text-md text-left'>
                  <li className='list-inside list-disc'>Node.js</li>
                  <li className='list-inside list-disc'>JavaScript</li>
                  <li className='list-inside list-disc'>Discord.js</li>
                </ul>
            </a>
          </Link>
        </li>
        <div className='py-6'>
          <li
            className='h-72 w-72 auto-grid flex flex-col outline bg-stone-100 
              p-7 transition-transform hover:-translate-y-2 rounded-xl'
          >
            <Link href='https://github.com/adrianhossen5/Video-Image-Classification'>
              <a target='_blank'>
                <div className='mb-1 text-lg font-bold'>
                  Video Image Classification
                </div>
                <p className='mb-4 text-md text-left'>
                  Developed a program that classifies an object through a webcam
                  utilizing a model that was trained using the ImageNet
                  database. Returns to the user the program’s confidence in its’ classification.
                </p>
                <ul className='grid grid-cols-2 whitespace-nowrap text-md text-left'>
                  <li className='list-inside list-disc'>HTML</li>
                  <li className='list-inside list-disc'>JavaScript</li>
                  <li className='list-inside list-disc'>ImageNet</li>
                </ul>
              </a>
            </Link>
          </li>
        </div>
        <div className='py-6'>
          <li
            className='h-72 w-72 auto-grid flex flex-col outline bg-stone-100 
              p-7 transition-transform hover:-translate-y-2 rounded-xl'
          >
            <Link href='https://github.com/adrianhossen5/personal_website'>
              <a target='_blank'>
                <div className='mb-1 text-lg font-bold'>Personal Portfolio</div>
                <p className='mb-4 text-md text-left'>Developed a personal portfolio utilizng the 
                Next.js framework and hosted on Netlify. Excersied the use of Tailwind CSS to style 
                nearly all the visible components.</p>
                <ul className='grid grid-cols-2 whitespace-nowrap text-md text-left'>
                  <li className='list-inside list-disc'>Next.js</li>
                  <li className='list-inside list-disc'>TypeScript</li>
                  <li className='list-inside list-disc'>Tailwind CSS</li>
                  <li className='list-inside list-disc'>Netlify</li>
                </ul>
              </a>
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Projects;
