require('dotenv').config()
const express = require("express");
const cors = require("cors");
const app = express();
const {SERVER_PORT} = process.env
const {seed} = require('./seed.js')
//const{} functions you need go here ie getUser getComment = require blah blah

app.use(express.json());
app.use(cors());

// app.get("/api/users", (req, res) => {
//     let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
//     res.status(200).send(friends);
//   });

// functions like GET POST, routes
app.post("/api/names", (req, res) => {
    //console.log(req.body)
res.status(200).send(req.body.name)
}
)


app.listen(5501, () => console.log("server running"));