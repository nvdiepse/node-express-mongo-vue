import express from "express";
import handlebars from "express-handlebars";

const app = express();

//define router
import apiRouter from "./routes/api";
import webRouter from "./routes/web";
import adminRouter from "./routes/admin";

const port = process.env.PORT || 3000;

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
app.use("/", webRouter);
app.use("/api", apiRouter);
app.use("/admin", adminRouter);


app.listen(port, () => {
    console.log(`App running port: ${port}`);
});
