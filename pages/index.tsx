import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react'
import Home from './Home';

const Index: NextPage = () => {
  return (
    <div className=''>
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
      <Home></Home>
    </div>
  );
};

export default Index;
