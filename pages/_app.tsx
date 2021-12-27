import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import splitbee from '@splitbee/web'

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      splitbee.init({
        scriptUrl: "/bee.js",
        apiUrl: "/_hive",
      })
    }
  }, []);

  return (
    <>
      <Head>
        {process.env.NODE_ENV === "production" && (
          <script async data-api="/_hive" src="/bee.js"></script>
        )}
      </Head>
      <Component {...pageProps} />
      <Toaster
        containerStyle={{
          top: 13,
          left: 20,
          bottom: 20,
          right: 20,
        }} />
    </>
  )
}

export default MyApp
