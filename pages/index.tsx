import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="mx-auto max-w-screen-lg">
      <Head>z
        <title>Adrian Hossen</title>
        <meta name="title" content="Adrian Hossen" />
        <meta name="description" content="UCF CS Student" />

        <meta name="theme-color" content="#111827" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adrianhossen.dev" />
        <meta property="og:title" content="Adrian Hossen" />
        <meta property="og:description" content="UCF CS Student" />
      </Head>
      <div className="py-60 flex-col justify-center text-center">
        <div className="mb-3 text-2xl leading-2;">Hello, my name is</div>
        <div className="mb-5 text-5xl font-semibold md:text-5xl lg:text-6xl xl:text-7xl">
          Adrian Hossen.
        </div>
        <div className="mx-auto max-w-md text-xl text-left">
          I am a software developer with a growth mindset who is always eager to
          learn more. I love programming and sharing my knowledge with others!
          Please contact me with any questions or if you just wish to chat.
        </div>
        <div className="py-10 mx-auto max-w-2xl">
          <Link href="mailto:adrianhossen5@gmail.com">
            <a
              className="mx-auto rounded-full w-max border border-gray-800 px-6 py-3 
            font-bold transition hover:bg-gray-500 hover:text-gray-800"
            >
              Contact Me
            </a>
          </Link>
        </div>
      </div>
      <div className="flex-col text-center">
        <div className="mx-auto max-w-lg">
          <p className="mb-3 text-3xl text-left font-bold">About Me</p>
          <p className="mb-4 text-xl text-left">
            Greetings! Here is a litle bit about my programming journey. My
            programming journey started back in middle school where Minecraft
            was the most popular game at the time. Due to this huge popularity,
            my interests in all things Minecraft grew, which included coding
            plugins and modifications. This slippery sloped into me declaring my
            major as Computer Science at the University of Central Florida.
          </p>
          <p className="mb-4 text-xl text-left">
            I recently completed an internship with Microsoft as an Explore
            intern (PM/SWE) where I developed many skills that I plan to build
            upon within the upcoming years. At this 12 week internship, I was
            tasked on creating a User Experience for Bing under Content
            Services. I'm also an incoming Software Engineering intern for
            Microsoft where I will continue to work under Content Services
            delivering user experiences for Bing.
          </p>
          <p className="mb-4 text-xl text-left">
            Here is a list of the technologies that I'm familiar with!
          </p>
          <ul className="grid grid-cols-2 whitespace-nowrap text-xl text-left">
            <li className="list-inside list-disc">Azure DevOps</li>
            <li className="list-inside list-disc">JavaScript</li>
            <li className="list-inside list-disc">PlanetScale DB</li>
            <li className="list-inside list-disc">TypeScript</li>
            <li className="list-inside list-disc">CosmoDB</li>
            <li className="list-inside list-disc">HTML</li>
            <li className="list-inside list-disc">Python</li>
            <li className="list-inside list-disc">Node.js</li>
            <li className="list-inside list-disc">Java</li>
            <li className="list-inside list-disc">C#</li>
            <li className="list-inside list-disc">CSS</li>
            <li className="list-inside list-disc">C</li>
          </ul>
        </div>
      </div>
      <div className="flex-col text-center py-60">
        <div className="mx-auto max-w-lg">
          <p className="mb-3 text-3xl text-left font-bold">Projects</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
