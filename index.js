const express = require('express');
const http = require('http');
const fs = require('fs');
const url = require('url');
const nodemailer = require('nodemailer');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'));
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(express.static('pages'));
app.use('/static', express.static('pages'));

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


var data = fs.readFileSync('words.json');
var words = JSON.parse(data);
console.log(words);

app.use(bodyParser());

app.post('/words', function(req, res) {
    // res.end(JSON.stringify(words, null, 2));
    return res.redirect('/about');
});

// app.get("/words", (req, res) => {

// })