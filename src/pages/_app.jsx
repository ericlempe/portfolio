import Aos from 'aos';
import { useEffect } from 'react';
import '../styles/index.scss';
import dynamic from 'next/dynamic'
import ContextProvider from '../Context/ContextProvider';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);
  return (
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
  )
}

export default MyApp
