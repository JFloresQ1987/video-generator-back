import Stripe from "stripe";
import { STRIPE_PRIVATE_KEY, WEBHOOK_END_POINT_SECRET } from "../config.js";
import { supabase, supabaseAdmin } from '../libs/supabase.js';

const stripe = new Stripe(STRIPE_PRIVATE_KEY);

// export const createSession = async (req, res) => {
//   try {

//     // const item_id = req.body.items[0].id;
//     const item_id = req.body.id;

//     const items = req.body.items.map((item) => {
//       return {
//         price_data: {
//           currency: 'usd',
//           product_data: {
//             name: item.title,
//             images: [item.image]
//           },
//           unit_amount: item.price * 100,
//         },
//         quantity: 1//item.qty
//       }
//     });

//     const session = await stripe.checkout.sessions.create({
//       line_items: [...items],
//       metadata: {
//         order_id: item_id,
//       },
//       mode: 'payment',
//       // success_url: `${YOUR_DOMAIN}/success.html`,
//       success_url: `http://localhost:4200/sales/${item_id}`,
//       // cancel_url: `${YOUR_DOMAIN}/cancel.html`,
//       cancel_url: `http://localhost:4200/cancel`,
//     });
//     return res.json({ url: session.url });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };





// const stripe = require('stripe')('sk_test_...');
// const express = require('express');
// const app = express();


// This is your Stripe CLI webhook secret for testing your endpoint locally.
// const endpointSecret = "whsec_f456e03fafdd597ec5a873baa6280efc000d2e5b73d6227ac6da984f16ae225b";

// app.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
export const webhook = async (req, res) => {

    try {
        const sig = req.headers['stripe-signature'];

        let event;

        try {            
            //   console.log(WEBHOOK_END_POINT_SECRET)
            event = stripe.webhooks.constructEvent(req.body, sig, WEBHOOK_END_POINT_SECRET);
        } catch (err) {
            console.log(err.message)
            res.status(400).send(`Webhook Error: ${err.message}`);
            return;
        }

        // console.log('llegoooooo event')
        // console.log(event)
        // console.log('event.type')
        // console.log(event.type)
        // console.log('event.data.object')
        // console.log(event.data.object)

        // Handle the event
        switch (event.type) {
            // case 'payment_intent.succeeded':
            // case 'charge.updated':
            case 'checkout.session.completed':
                // const paymentIntentSucceeded = event.data.object;
                // // Then define and call a function to handle the event payment_intent.succeeded
                // console.log('payment_intent.succeeded')
                // console.log(paymentIntentSucceeded);

                // console.log('llegoo checkout.session.completed')
                const paymentIntent = event.data.object;
                // console.log(paymentIntent)

                if (paymentIntent /*&& paymentIntent.status == 'succeeded'*/) {

                    // // console.log('llegoo checkout.session.completed')
                    // console.log(paymentIntent?.customer_details)
                    // // console.log(paymentIntent?.billing_details?.email)
                    // console.log(paymentIntent?.metadata)
                    // // console.log(paymentIntent?.metadata)



                    // console.log(paymentIntentSucceeded.customer_details)
                    const user_email = paymentIntent.customer_details?.email;

                    // const id = 'qwe';
                    // console.log(paymentIntentSucceeded.metadata)
                    const id = paymentIntent.metadata?.order_id;

                    if (id) {
                        const { error } = await supabaseAdmin
                            .from('orders')
                            .update({
                                // order_state: 'edited',
                                user_email: user_email,
                                payment_state: 'paid',
                                // images: _images,
                                // video_rendered_url: _url,
                            })
                            .eq('id', id)

                        // if (data) console.log(data)
                        if (error) console.log(error)
                    }
                }

                break;
            // ... handle other event types
            default:
                console.log(`Unhandled event type ${event.type}`);
        }
        // console.log('llego');
        // Return a 200 response to acknowledge receipt of the event
        res.send();
        // return res.json(null);
        // return res.json({ url: session.url });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};

// app.listen(4242, () => console.log('Running on port 4242'));