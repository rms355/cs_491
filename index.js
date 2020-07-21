const express = require('express');
const http = require('http');
const fs = require('fs');
const url = require('url');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();

app.use('/static', express.static('public'))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.htm'));
});

// app.get('/', (req, res) => {
//     res.send("Welcome");
// });

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Hello World");
});