import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react'
import About from './About';
import Footer from './Footer';
import Hero from './Hero';
import Projects from './Projects';

const Home: NextPage = () => {
  return (
    <div className='mx-auto max-w-screen-lg'>
      <Head>
        <title>Adrian Hossen</title>
        <meta name='title' content='Adrian Hossen' />
        <meta name='description' content='UCF CS Student' />

        <meta name='theme-color' content='#111827'/>
        <meta property='og:type' content='website'/>
        <meta property='og:url' content='https://adrianhossen.dev'/>
        <meta property='og:title' content='Adrian Hossen' />
        <meta property='og:description' content='UCF CS Student'/>
      </Head>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
};

export default Home;
