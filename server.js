const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());


// functions like GET POST, routes
app.post("/api/names", (req, res) => {
    //console.log(req.body)
res.status(200).send(req.body.name)
}
)


app.listen(5501, () => console.log("server running"));