import mongoose from "mongoose";
require("dotenv").config();

mongoose.connect(process.env.DB_CONNECTION_STRING, { useNewUrlParser: true });
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

export default mongoose;