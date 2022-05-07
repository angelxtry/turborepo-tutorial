import '../../styles/globals.css';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  // @ts-ignore
  <Component {...pageProps} />
);

export default MyApp;
