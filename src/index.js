import express from "express";
import path from "path";
import { PORT } from "./config.js";
// import webhookRoutes from "./routes/webhook.routes.js";
// import paymentRoutes from "./routes/payment.routes.js";
// import supabaseRoutes from "./routes/supabase.routes.js";
// import resendRoutes from "./routes/resend.routes.js";
import cors from "cors";
// import { Resend } from "resend";
// import bodyParser from "body-parser";

// Initializations
const app = express();
// const resend = new Resend("re_123456789");

app.use(cors())

// Middlewares
app.use(express.urlencoded({ extended: false }));

// app.use('/api', webhookRoutes);

app.use(express.json());

// Routes
// app.use('/api', paymentRoutes);
// // app.use(supabaseRoutes);
// // app.use('/api/product', require('./routes/supabase.routes'));
// app.use('/api', supabaseRoutes);

// app.use('/api', resendRoutes);

app.get('/api', function(req, res) {
  res.json({ mensaje: '¡Hola Mundo!' })   
})

// Static files
app.use(express.static(path.resolve("../public")));

// app.use(bodyParser.json());

// Start Server
app.listen(PORT);

console.log(
    [
      `Server running on port ${PORT}!`,
      '',
    ].join('\n')
  );