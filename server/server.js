import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

const app = express();
app.use(cors(), bodyParser.json());

app.get("/", (req, res) => {
    res.set("Content-Type", "application/json");
    let data = {
        message: "Hello world, Woooooeeeee!!!! JBG"
    };
    res.send(JSON.stringify(data, null, 2));
});

app.listen(4000, () => {
    console.log("Listening on port 4000");
});
