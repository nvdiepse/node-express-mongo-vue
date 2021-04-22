const express = require("express");
const handlebars = require("express-handlebars");
const authMiddleware = require("./middlewares/auth");
require("dotenv").config();

const app = express();

//define router
const apiRouter = require("./routes/api");
const webRouter = require("./routes/web");
const adminRouter = require("./routes/admin");

const port = process.env.PORT || 3000;
const sequelize = require("./config/db");
app.set("view engine", "hbs");
app.engine(
    "hbs",
    handlebars({
        layoutsDir: __dirname + "/views/layout/dashboard",
        extname: "hbs",
    })
);

//setup public folder
app.use(express.static("./public"));
app.use(express.json());

//setup router
app.use("/api/v1", authMiddleware, apiRouter);
app.use("/admin", adminRouter);
app.use("/", webRouter);

app.listen(port, () => {
    console.log(`App running port: ${port}`);
});
