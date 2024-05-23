import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;

export const STRIPE_PRIVATE_KEY = process.env.STRIPE_PRIVATE_KEY;

export const WEBHOOK_END_POINT_SECRET = process.env.WEBHOOK_END_POINT_SECRET;