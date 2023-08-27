const express = require("express");
const bodyparser = require("body-parser");
//var favicon = require('serve-favicon')
const fs = require("fs");
const path = require("path");
const app = express();
const port = 80;
console.log("HI");
console.log(path.join(__dirname, 'static'));
app.use('/static', express.static('static'));


app.get("/", (req, res) => {
    // Send the HTML file directly
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});


app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});