const express = require("express");

const app = express();

app.get("/hello", (req, res) => {
    res.send("<h1>Hi, Human!</h1>");
});

app.get("/burger", (req, res) => {
    res.send("<h1>Im hungry!</h1>");
});

app.listen(8080, () => {
    console.log('Server listening on port 8080!');
});