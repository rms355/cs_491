const express = require('express');
const http = require('http');
const fs = require('fs');
const url = require('url');
const nodemailer = require('nodemailer');

const app = express();

app.use('/static', express.static('public'))

let handleRequest = (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('./index.htm', null, function (error, data) {
        if (error) {
            res.writeHead(404);
            res.write('File not found!');
        } else {
            res.write(data);
        }
        res.end();
    });
};

// app.get('/', (req, res) => {
//     res.send("Welcome");
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//     console.log("Hello World");
// });

http.createServer(handleRequest).listen(3000);