import { Router } from "express";
import usersRouter from "./users";
import equipeRouter from "./equipe";

const router = new Router();

router
    .use("/users", usersRouter)
    .use("/equipe", equipeRouter);

export default router;