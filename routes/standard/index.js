import express, { Router } from "express";
import path from "path";

const router = new Router();

const publicDir = path.join(__dirname, "../../public/");

function getCookie(req, cname) {
    if (!req.headers.cookie) return "";

    const name = cname + "=";
    const cookies = req.headers.cookie.split(";");

    for (let cookie of cookies) {
        while (cookie.charAt(0) === " ") cookie = cookie.substring(1);

        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length);
        }
    }

    return "";
}

router
    .get("/personnages", function (req, res) {
        return res.sendFile(publicDir + "personnages.html");
    })
    .get("/billetterie", function (req, res) {
        return res.sendFile(publicDir + "billetterie.html");
    })
    .get("/infos", function (req, res) {
        return res.sendFile(publicDir + "infos.html");
    })
    .get("/login", function (req, res) {
        if (getCookie(req, "auth_token")) return res.redirect("/");

        return res.sendFile(publicDir + "login.html");
    });

export default router;
