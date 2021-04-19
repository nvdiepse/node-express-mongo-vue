import mongoose from "mongoose";
const connection = mongoose.connect("mongodb://localhost/zoom", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

module.exports = connection;