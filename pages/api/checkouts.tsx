import { NextApiRequest, NextApiResponse } from "next";
import { Stripe } from "stripe";
import { stripe } from '../../lib/stripe/server';

export async function createStripeCheckoutSession(line_items: Stripe.Checkout.SessionCreateParams.LineItem[]) {
  const url = process.env.WEBAPP_URL;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items,
    success_url: `${url}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${url}/checkout`,
  });

  return session;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.send(await createStripeCheckoutSession(req.body.line_items));
}
