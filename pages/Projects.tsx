import Link from 'next/link';
import React from 'react';

const Projects = () => {
  return (
    <div id="projects" className="flex-col text-center py-60">
      <div
        className="mx-auto max-w-sm text-xl text-left xs:max-w-sm sm:max-w-sm 
        md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-lg"
      >
        <p className="mb-8 text-3xl text-left font-bold">Projects</p>
      </div>
      <ul
        className="mx-auto max-w-sm xs:max-w-sm sm:max-w-md 
        md:max-w-md lg:max-w-xl xl:max-w-xl 2xl:max-w-xl grid gap-6 md:grid-cols-2 lg:grid-cols-2"
      >
        <li
          className="outline bg-stone-100 
            p-7 transition-transform hover:-translate-y-2 rounded-xl"
        >
          <Link href="https://github.com/adrianhossen5/personal_website">
            <a target="_blank">
              <div className="mb-1 text-lg font-bold">Personal Portfolio</div>
              <p className="mb-4 text-md text-left">
                Developed a personal portfolio utilizng the Next.js framework.
                Excersied the use of Tailwind CSS to style nearly all the
                visible components. The site is currently being hosted Netlify.
              </p>
              <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-md text-left italic font-semibold">
                <li className="list-inside">Next.js</li>
                <li className="list-inside">TypeScript</li>
                <li className="list-inside">Tailwind</li>
              </ul>
            </a>
          </Link>
        </li>
        <li
          className="outline bg-stone-100 
            p-7 transition-transform hover:-translate-y-2 rounded-xl"
        >
          <Link href="https://github.com/adrianhossen5/comp-notes">
            <a target="_blank">
              <div className="mb-1 text-lg font-bold">Comp Notes</div>
              <p className="mb-4 text-md text-left">
                Created a notes app where users can view, create, and delete
                comp notes at will. Via Next-Auth, all of the user&apos;s
                notes will be secured.
              </p>
              <ul className="flex flex-wrap gap-x-2.5 gap-y-1.5 text-md text-left italic font-semibold">
                <li className="list-inside">Next.js</li>
                <li className="list-inside">TypeScript</li>
                <li className="list-inside">Next-Auth</li>
                <li className="list-inside">TailwindCSS</li>
              </ul>
            </a>
          </Link>
        </li>
        <div className="py-2">
          <li
            className="outline bg-stone-100 
            p-7 transition-transform hover:-translate-y-2 rounded-xl"
          >
            <Link href="https://github.com/adrianhossen5/ty">
              <a target="_blank">
                <div className="mb-1 text-lg font-bold">Ty Bot</div>
                <p className="mb-4 text-md text-left">
                  Contributed to the UCF Knights Discord Server&apos;s bot by
                  developing a birthday feature. Connected the bot to a
                  planetscale database for user profile storage (birthdays).
                </p>
                <ul className="flex flex-wrap gap-x-1.5 gap-y-1.5 text-md text-left italic font-semibold">
                  <li className="list-inside">PlanetScale</li>
                  <li className="list-inside">TypeScript</li>
                  <li className="list-inside">Prisma</li>
                </ul>
              </a>
            </Link>
          </li>
        </div>
        <div className="py-2">
          <li
            className="outline bg-stone-100 
            p-7 transition-transform hover:-translate-y-2 rounded-xl"
          >
            <Link href="https://github.com/adrianhossen5/Video-Image-Classification">
              <a target="_blank">
                <div className="mb-1 text-lg font-bold">
                  Video Image Classification
                </div>
                <p className="mb-4 text-md text-left">
                  Developed a program that classifies an object through a webcam
                  utilizing an ImageNet trained model. Program returns the
                  confidence level of its classification.
                </p>
                <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-md text-left italic font-semibold">
                  <li className="list-inside">HTML</li>
                  <li className="list-inside">JavaScript</li>
                  <li className="list-inside">ImageNet</li>
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
