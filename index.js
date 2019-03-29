import express from "express";
import parser from "body-parser";
import path from "path";
// Routers
import standardRouter from "./routes/standard";
import apiRouter from "./routes/api";
// For environment variables
require("dotenv").config();

const publicDir = path.join(__dirname, "public");
const equipeDir = path.join(__dirname, "../equipe-app/");

// Creating the Express app and setting the parser
const app = new express();
app
    .use(parser.urlencoded({
        extended: false
    }))
    // defining the "public" folder as the root for static files
    .use(express.static(publicDir))
    // HTTP headers middleware
    .use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "/");
        res.header("Access-Control-Allow-Methods", "DELETE");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        // res.header("Connection", "Keep-Alive");
        next();
    })
    // Routes
    .use("/", standardRouter)
    .use("/api", apiRouter)
    // Staticly serving the equipe app
    .use("/equipe", express.static(path.join(equipeDir, "build")));

app.get("/equipe/*", function (req, res) {
    return res.sendFile(path.join(equipeDir, "build", "index.html"));
});

app.listen(process.env.PORT);
