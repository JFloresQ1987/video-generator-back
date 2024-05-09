import Stripe from "stripe";
import { STRIPE_PRIVATE_KEY } from "../config.js";

const stripe = new Stripe(STRIPE_PRIVATE_KEY);

export const createSession = async (req, res) => {
  try {    
    
    const item_id = req.body.items[0].id;
    
    const items = req.body.items.map((item) => {
      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.title,
            images: [item.image]
          },
          unit_amount: item.price * 100,
        },
        quantity: item.qty
      }
    });
  
    const session = await stripe.checkout.sessions.create({
      line_items: [...items],
      metadata: {
        order_id: item_id,
      },
      mode: 'payment',
      // success_url: `${YOUR_DOMAIN}/success.html`,
      success_url: `http://localhost:4200/sales/${item_id}`,
      // cancel_url: `${YOUR_DOMAIN}/cancel.html`,
      cancel_url: `http://localhost:4200/cancel`,
    });

    // const session = await stripe.checkout.sessions.create({
    //   line_items: [
    //     {
    //       price_data: {
    //         product_data: {
    //           name: "Laptop",
    //         },
    //         currency: "usd",
    //         unit_amount: 2000,
    //       },
    //       quantity: 1,
    //     },
    //     {
    //       price_data: {
    //         product_data: {
    //           name: "TV",
    //         },
    //         currency: "usd",
    //         unit_amount: 1000,
    //       },
    //       quantity: 2,
    //     },
    //   ],
    //   mode: "payment",
    //   success_url: "http://localhost:3000/success",
    //   cancel_url: "http://localhost:3000/cancel",
    // });

    // console.log(session);
    return res.json({ url: session.url });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};