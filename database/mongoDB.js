import mongoose from "mongoose";

mongoose.connect("mongodb+srv://armel:kana8928lolosu@cluster0-9uqo2.mongodb.net/test?retryWrites=true", { useNewUrlParser: true });
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

export default mongoose;