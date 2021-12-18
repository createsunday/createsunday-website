import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import splitbee from '@splitbee/web'

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    splitbee.init()
  }, []);

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
