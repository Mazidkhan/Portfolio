const express = require('express');
const app = express();
const port = process.env.port;

const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
})

app.use(express.urlencoded({ extended: true }));
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
