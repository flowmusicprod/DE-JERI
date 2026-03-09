import Stripe from "stripe";

let stripe = null;

export function getStripeServer() {
  if (stripe) {
    return stripe;
  }

  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    return null;
  }

  stripe = new Stripe(key, { apiVersion: "2025-02-24.acacia" });
  return stripe;
}

