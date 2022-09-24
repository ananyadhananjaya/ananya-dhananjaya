import type { AppProps } from 'next/app'
import Layout from './components/layout'
import '../styles/globals.css'
import Head from 'next/head'
import { useEffect } from 'react'

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.addEventListener('visibilitychange', addEventListenertest)
  }, [])

  const addEventListenertest = () => {
    if (document.visibilityState === 'visible') {
      document.title = 'AD'
    } else {
      document.title = 'Hey! Come back'
    }
  }

  return (
    <>
      <Head>
        <title>AD</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
