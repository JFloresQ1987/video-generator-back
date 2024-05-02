import { Router } from "express";
import { createSession } from "../controllers/payment.controllers.js";

const router = Router();

router.post("/create-checkout-session", createSession);

router.get("/success", (req, res) => res.redirect("/success.html"));

router.get("/cancel", (req, res) => res.redirect("/cancel.html"));

export default router;