// Initialize Stripe
import { loadStripe } from '@stripe/stripe-js';

export const stripe = loadStripe(
  process.env.STRIPE_SECRET ?? "",
  {
    apiVersion: '2020-08-27',
  }
);
