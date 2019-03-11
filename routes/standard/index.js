import { Router } from "express";
import path from "path";

const router = new Router();

const publicDir = path.join(__dirname + "../../../public/");

router
    .get("/", function (req, res) {
        return res.sendFile(publicDir + "index.html");
    })
    .get("/equipe", function (req, res) {
        return res.sendFile(publicDir + "equipe.html");
    })
    .get("/trailer", function (req, res) {
        return res.sendFile(publicDir + "trailer.html");
    })
    .get("/billetterie", function (req, res) {
        return res.sendFile(publicDir + "billetterie.html");
    })
    .get("/infos", function (req, res) {
        return res.sendFile(publicDir + "infos.html");
    });

export default router;