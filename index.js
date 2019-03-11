import express from "express";
import parser from "body-parser";
// Routers
import standardRouter from "./routes/standard";
import apiRouter from "./routes/api";

// Creating the Express app and setting the parser
const app = new express();
app
    .use(parser.urlencoded({
        extended: false
    }))
    // defining the "public" folder as the root for static files
    .use(express.static("public"));

app
    .use("/", standardRouter)
    .use("/api", apiRouter);

app.listen(process.env.PORT || 3000);