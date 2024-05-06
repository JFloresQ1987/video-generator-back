// import Stripe from "stripe";
// import { STRIPE_PRIVATE_KEY } from "../config.js";
import { supabase } from '../libs/supabase.js';

// const stripe = new Stripe(STRIPE_PRIVATE_KEY);

export const getCategoriesAll = async (req, res) => {

    // const category_id = req.query.category_id;

    let { data, error } = await supabase
      .from('categories')
      .select('*')
    //   .eq('category_id', category_id)      
      .order('title', { ascending: true })

    if (data) console.log(data)
    if (error) console.log(error)

    return res.json({
        ok: true,
        data,
    });

    // return res.json(data);    
};

export const getProductsByCategoryId = async (req, res) => {

    // const category_id = req.query.category_id;
    const category_id = req.params.category_id;    

    let { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('category_id', category_id)      
      .order('title', { ascending: true })

    if (data) console.log(data)
    if (error) console.log(error)

    // return res.json({
    //     ok: true,
    //     data,
    // });

    return res.json(data);

    // try {
    //     const desde = Number(req.query.desde) || 0;
    //     const [analistas, total] = await Promise.all([
    //         Analista.find({ es_borrado: false, es_vigente: true },
    //             "codigo descripcion productos usuario es_bloqueado es_vigente"
    //             // "codigo descripcion producto usuario es_bloqueado es_vigente"
    //         )
    //         .populate({
    //             path: "usuario",
    //             select: "rol persona usuario",
    //             populate: {
    //                 path: "persona",
    //                 select: "nombre apellido_paterno apellido_materno",
    //             },
    //         })
    //         // .populate("producto", "_id descripcion")
    //         .skip(desde)
    //         .limit(10),
    //         Analista.find({ es_borrado: false }).countDocuments()
    //     ])
    //     res.json({
    //         ok: true,
    //         analistas,
    //         total
    //     });

    // } catch (error) {

    //     const controller = "analista.controller.js -> listar";
    //     logger.logError(controller, req, error);

    //     return res.status(500).json({
    //         ok: false,
    //         msg: getMessage('msgError500')
    //     });
    // }
};

export const getModelsByProductId = async (req, res) => {

    // const category_id = req.query.category_id;
    const product_id = req.params.product_id;    



    let { data, error } = await supabase
      .from('models')
      .select('*')
      .eq('product_id', product_id)      
      .order('title', { ascending: true })
      // .single()

    if (data) console.log(data)
    if (error) console.log(error)

    // return res.json({
    //     ok: true,
    //     data,
    // });

    return res.json(data);
};

export const getModelById = async (req, res) => {

  // const category_id = req.query.category_id;
  const id = req.params.id;    
  
  let { data, error } = await supabase
    .from('models')
    .select('*')
    .eq('id', id)
    .single()

  if (data) console.log(data)
  if (error) console.log(error)

  // return res.json({
  //     ok: true,
  //     data,
  // });

  return res.json(data);
};

export const getOrderById = async (req, res) => {

  // const category_id = req.query.category_id;
  const id = req.params.id;    
  
  let { data, error } = await supabase
    .from('orders')
    .select('*')
    .eq('id', id)
    .single()

  if (data) console.log(data)
  if (error) console.log(error)

  // return res.json({
  //     ok: true,
  //     data,
  // });

  return res.json(data);
};

export const createOrder = async (req, res) => {

  // const category_id = req.query.category_id;
  const order = req.query;
  // const id = req.params.id;
  console.log(order);
  
  const { data, error } = await supabase
        .from('orders')
        .insert([
          // { some_column: 'someValue', other_column: 'otherValue' },
          // this.myForm.value,
          order
        ])
        .select()   

  if (data) console.log(data)
  if (error) console.log(error)

  return res.json({
      ok: true,
      data,
  });

  // return res.json(data);
};

// export const createSession = async (req, res) => {
//   try {

//     const item_id = req.body.items[0].id;
//     // console.log(req.body.items);
//     // console.log(item_id);
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
//         quantity: item.qty
//       }
//     });
  
//     const session = await stripe.checkout.sessions.create({
//       line_items: [...items],
//       metadata: {
//         order_id: item_id,
//       },
//       mode: 'payment',
//       // success_url: `${YOUR_DOMAIN}/success.html`,
//       success_url: `http://localhost:4200/sales/${items[0].id}`,
//       // cancel_url: `${YOUR_DOMAIN}/cancel.html`,
//       cancel_url: `http://localhost:4200/cancel`,
//     });

//     // const session = await stripe.checkout.sessions.create({
//     //   line_items: [
//     //     {
//     //       price_data: {
//     //         product_data: {
//     //           name: "Laptop",
//     //         },
//     //         currency: "usd",
//     //         unit_amount: 2000,
//     //       },
//     //       quantity: 1,
//     //     },
//     //     {
//     //       price_data: {
//     //         product_data: {
//     //           name: "TV",
//     //         },
//     //         currency: "usd",
//     //         unit_amount: 1000,
//     //       },
//     //       quantity: 2,
//     //     },
//     //   ],
//     //   mode: "payment",
//     //   success_url: "http://localhost:3000/success",
//     //   cancel_url: "http://localhost:3000/cancel",
//     // });

//     // console.log(session);
//     return res.json({ url: session.url });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };