import Stripe from "stripe";
import { env } from "@/env.mjs";

export const stripe = new Stripe(env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-01-27.acacia",
});