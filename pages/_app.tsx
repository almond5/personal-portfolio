import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from './Navbar';
import Footer from '../src/components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <Navbar />
        <Component {...pageProps} />
    </>
  );
}

export default MyApp;
