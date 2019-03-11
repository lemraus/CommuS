import express from "express";
import parser from "body-parser";
// Routers
import standardRouter from "./routes/standard";
import apiRouter from "./routes/api";

// Creating the Express app and setting the parser
const app = new express();
app.use(parser.urlencoded({
    extended: false
}));

app
    .use("/", standardRouter)
    .use("/api", apiRouter);