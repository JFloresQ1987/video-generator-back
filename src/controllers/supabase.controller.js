// import Stripe from "stripe";
// import { STRIPE_PRIVATE_KEY } from "../config.js";
import { supabase, supabaseAdmin } from '../libs/supabase.js';

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
  // console.log(req)
  // console.log(id)
  
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

  // const test = {
  // "model_id": "string",
  // "model_composition": "string",
  // // "messages": Messages,
  // // "images": Images,
  // "video_rendered_url": "string",
  // }

  // console.log(test)

  return res.json(data);
};

export const createOrder = async (req, res) => {

  // console.log('Entro a guardar');

  // const { usuario, comentario } = req.body;
  
  // const category_id = req.query.category_id;
  const order = req.body;
  // const id = req.params.id;
  
  // console.log(order);
  
  //TODO: mejorar supabaseAdmin
  const { data, error } = await supabaseAdmin
        .from('orders')
        .insert([
          // { some_column: 'someValue', other_column: 'otherValue' },
          // this.myForm.value,
          order
        ])
        .select()
        .single()

  if (data) console.log(data)
  if (error) console.log(error)

  return res.json({
      ok: true,
      data,
  });

  // return res.json(data);
};

export const updateOrder = async (req, res) => {

  // console.log('Entro a guardar');

  // const { usuario, comentario } = req.body;
  
  // const category_id = req.query.category_id;
  // const id = req.params.id;
  const order = req.body;
  // const id = req.params.id;
  const id = order.id;
  
  // console.log(id);
  // console.log(order);
  
  //TODO: mejorar supabaseAdmin
  // const { data, error } = await supabaseAdmin
  //       .from('orders')
  //       .insert([
  //         // { some_column: 'someValue', other_column: 'otherValue' },
  //         // this.myForm.value,
  //         order
  //       ])
  //       .select()
  //       .single()
//TODO: completar las propiedades a actualizar
  const { error } = await supabaseAdmin
    .from('orders')
    .update({
      order_state: 'edited',
      // images: _images,
      // video_rendered_url: _url,
    })
    .eq('id', id)

  // if (data) console.log(data)
  if (error) console.log(error)

  return res.json({
      ok: true,
      // data,
  });

  // return res.json(data);
};

export const fileUpload = async (req, res) => {

  // console.log('llego a back')
  
  const id = req.params.id;

  if (!req.files || Object.keys(req.files).length === 0)
      return res.status(400).json({
          ok: false,
          msg: 'No hay ningún documento seleccionado.'
      });

      const imageFile = req.files.file;
      // const file = req.files.imagen;
  const nombreCortado = imageFile.name.split('.');
  
  const extension = nombreCortado[nombreCortado.length - 1];
  const expensiones_validas = ['png', 'jpg', 'jpeg', 'gif'];

  if (!expensiones_validas.includes(extension))
      return res.status(400).json({
          ok: false,
          msg: 'Extensión de documento no permitido.'
      });

  // const nombre_documento = `${uuidv4()}.${extension}`;
  // const path = `./documents/${nombre_documento}`;

  // file.mv(path, (err) => {

  //     if (err)
  //         return res.status(500).json({
  //             ok: false,
  //             msg: 'Error al subir el documento.'
  //         });

  //     res.json({
  //         ok: true,
  //         msg: 'Documento subido satisfactoriamente.',
  //         nombre_documento
  //     });
  // })

  const image = imageFile.data;
  const type = imageFile.mimetype;

  // const imageFile = file
        const imageName = `${(new Date()).getTime()}`
        const { data, error } = await supabase
            .storage
            .from('images')
            // .upload(`${imageName}.png`, imageFile, {
              .upload(`${imageName}.${extension}`, image, {
                contentType: type,
                cacheControl: '3600',
                upsert: false
            })



    //         const { error } = await supabaseAdmin.storage
    // .from(bucketName)
    // .upload(filePath, fileData, options);

        if (data) console.log(data)
        if (error) console.log(error)

        // return data?.path;

        return res.json({
          ok: true,
          // data: data.path,
          data: data,
      });

}





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