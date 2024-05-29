// import { Router } from "express";
// import { sentEmail } from "../controllers/resend.controller.js";
// // import { createSession } from "../controllers/payment.controller.js";

// const router = Router();

// // router.get("/sentEmail", (req, res) => res.redirect("/cancel.html"));
// router.get('/sent-email', sentEmail);

// export default router;


// // // import express, { Request, Response } from "express";
// // import { Resend } from "resend";

// // // const app = express();
// // const resend = new Resend("re_123456789");

// // app.get("/", async (req, res) => {
// //     const { data, error } = await resend.emails.send({
// //         from: "Acme <onboarding@resend.dev>",
// //         to: ["delivered@resend.dev"],
// //         subject: "hello world",
// //         html: "<strong>it works!</strong>",
// //     });

// //     if (error) {
// //         return res.status(400).json({ error });
// //     }

// //     res.status(200).json({ data });
// // });

// // // app.listen(3000, () => {
// // //     console.log("Listening on http://localhost:3000");
// // // });
