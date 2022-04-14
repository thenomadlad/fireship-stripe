import { NextApiRequest, NextApiResponse } from "next";
import { createStripeCheckoutSession } from "../../lib/stripe/checkout";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.send(await createStripeCheckoutSession(req.body.line_items));
}
