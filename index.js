const express = require('express');
const http = require('http');
const fs = require('fs');
const url = require('url');
const nodemailer = require('nodemailer');

const app = express();


app.get('/', (req, res) => {
    res.send("Welcome");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Hell World");
});