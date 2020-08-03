const express = require('express');
const http = require('http');
const fs = require('fs');
const url = require('url');
const nodemailer = require('nodemailer');
const path = require('path');
const bodyParser = require('body-parser');
const { response } = require('express');
const qs = require('querystring');
require('dotenv').config();

const app = express();

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(express.static('pages'));
app.use('/static', express.static(path.join(__dirname, 'pages')));

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/index.htm'));
// });

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.htm');
  });

const port = process.env.PORT || 3000;
const host = '0.0.0.0';
app.listen(port, host);

// app.set('port', process.env.PORT || 3000);
// app.listen(3000);

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//     // console.log("Hello World");
// });


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());


app.get('/contact', function(req, res) {
  console.log('GET /')
});

app.post('/contact', function(req, res) {
  console.log('POST /')
  console.dir(req.body)

  const emailBody = `
    <p>
    Dear ${req.body.first} ${req.body.last},
    <br><br>
    Thank you for your feedback!
    <br><br><br>
    -From ryan-stefan@http://csapp-env.eba-6mwqezer.us-east-1.elasticbeanstalk.com/
    </p>  
  `;

  // E-mail
  
  var transporter = nodemailer.createTransport({
      service:'gmail',
      auth:{
          user: process.env.G_EMAIL,
          pass: process.env.EMAIL_PASS
      }
  });
  
  var mailOptions = {
      from: '"Ryan Stefan" <rms355@gmail.com>',
      to: req.body.email,
      subject: 'Project 4 - Test E-mail',
      html: emailBody
  };
  
  transporter.sendMail(mailOptions, function(err, info){
      if(err){
          console.log(err);
      }
      else{
          console.log('E-mail sent:' + info.response);
      }
  });
  res.redirect('back');
});
