import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import db from "./models";

const app = express();
app.use(cors(), bodyParser.json());

app.get("/", (req, res) => {
    res.set("Content-Type", "application/json");
    let data = {
        message: "Hello world, Woooooeeeee!!!! JBG"
    };
    res.send(JSON.stringify(data, null, 2));
});

db.sequelize
    .authenticate()
    .then(() => {
        console.log("MySql Connection has been established successfully.");
        app.listen(3000, () => {
            console.log("Listening on port 3000");
        });
    })
    .catch(err => {
        console.error("Unable to connect to the database:", err);
    });
