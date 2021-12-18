import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster
        containerStyle={{
          top: 8,
          left: 20,
          bottom: 20,
          right: 20,
        }} />
    </>
  )
}

export default MyApp
