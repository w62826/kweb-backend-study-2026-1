const express = require("express");

const app = express();

app.get("/food", (req, res) => {
    res.send("<h1>Wanna Eat?</h1>");
});

app.get("/burger", (req, res) => {
    res.send("<h1>Not Healthy!</h1>");
});

app.listen(8080, () => {
    console.log('Server listening on port 8080!');
});