import '../styles/globals.css'
import Layout from '../components/layout'
import { AppProps } from 'next/app'
import { Elements } from '@stripe/react-stripe-js'
import { stripe } from '../lib/stripe'

function MyApp({ Component, pageProps }: AppProps) {
  return <Layout>
    <Elements stripe={stripe}>
      <Component {...pageProps} />
    </Elements>
  </Layout>
}

export default MyApp
