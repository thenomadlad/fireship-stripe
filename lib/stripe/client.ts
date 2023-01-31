import { loadStripe } from '@stripe/stripe-js'

export const stripe = loadStripe(
  process.env.STRIPE_PUBLISHABLE_KEY ?? "",
  {
    apiVersion: '2020-08-27',
  }
);