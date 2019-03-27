import { Schema } from "mongoose";
import mongoose from "../database/mongoDB";

const membreSchema = new Schema({
    year: {
        type: Number,
        required: true
    },
    section: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    poste: {
        type: String,
        required: false
    },
    photoPath: {
        type: String,
        required: true
    }
});

export default mongoose.model("Membre", membreSchema);