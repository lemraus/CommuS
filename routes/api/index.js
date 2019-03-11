import { Router } from "express";

const router = new Router();

router
    .get("/", (req, res) => {
        return res.send("Hello there");
    });

export default router;