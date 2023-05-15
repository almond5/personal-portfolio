import React from 'react';

const About = () => {
  return (
    <div id="about" className="text-center py-12 mx-auto bg-blend-color max-w-screen-sm">
      <div
        className="mx-auto max-w-sm text-xl text-left xs:max-w-sm sm:max-w-sm 
        md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-lg"
      >
        <p
          className="mb-3 text-left text-2xl font-semibold xs:text-2xl sm:text-2xl 
          md:text-2xl lg:text-3xl xl:text-3xl"
        >
          About Me
        </p>
        <p className="mb-4 text-xl text-left">
          Hello! Here is a little bit about my programming journey: My journey
          dates back to my time in middle school where Minecraft was arguably
          the most popular game. Due to this craze, my interests in all things
          Minecraft grew, including plugins and mods. My interests eventually
          led me to learn Java and the rest is history. I am now a Computer
          Science major @ the Univeristy of Central Florida and an incoming
          Software Engineer Intern @ Microsoft!
        </p>
        <p className="mb-4 text-xl text-left">
          As it pertains to my skillset, I have experience working with
          full-stack web applications, mobile application, and object oriented
          systems. I am always eager to learn more and I am currently learning
          about machine learning.
        </p>
        <p className="mb-4 text-xl text-left">
          Here is a list of the technologies that I&apos;m familiar with!
        </p>
        <ul className="grid grid-cols-2 whitespace-nowrap text-xl text-left">
          <li className="list-inside list-disc">JavaScript</li>
          <li className="list-inside list-disc">Databases</li>
          <li className="list-inside list-disc">TypeScript</li>
          <li className="list-inside list-disc">CosmoDB</li>
          <li className="list-inside list-disc">Prisma ORM</li>
          <li className="list-inside list-disc">SQL</li>
          <li className="list-inside list-disc">HTML</li>
          <li className="list-inside list-disc">Python</li>
          <li className="list-inside list-disc">Java</li>
          <li className="list-inside list-disc">C#</li>
          <li className="list-inside list-disc">CSS</li>
          <li className="list-inside list-disc">C</li>
          <li className="list-inside list-disc">React.js</li>
          <li className="list-inside list-disc">TailwindCSS</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
