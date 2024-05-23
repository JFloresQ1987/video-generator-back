import express from "express";
import { Router } from "express";
import { createSession/*, webhook*/ } from "../controllers/payment.controller.js";

const router = Router();

router.post("/create-checkout-session", createSession);

// // express.raw({ type: 'application/json' })
// router.post("/webhook", express.raw({type: 'application/json'}), webhook);
// // router.post("/webhook", router.raw({type: 'application/json'}), webhook);

router.get("/success", (req, res) => res.redirect("/success.html"));

router.get("/cancel", (req, res) => res.redirect("/cancel.html"));

export default router;