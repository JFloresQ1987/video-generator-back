import express from "express";
import path from "path";
import { PORT } from "./config.js";
import paymentRoutes from "./routes/payment.routes.js";
import supabaseRoutes from "./routes/supabase.routes.js";
import cors from "cors";
// import bodyParser from "body-parser";

// Initializations
const app = express();
app.use(cors())

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use(paymentRoutes);
// app.use(supabaseRoutes);
// app.use('/api/product', require('./routes/supabase.routes'));
app.use('/api', supabaseRoutes);

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