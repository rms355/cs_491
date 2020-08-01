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

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.htm'));
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    // console.log("Hello World");
});


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());


// app.get('/contact', (req, res) => {
//   console.log('Data: ', req.query);
//   return res.send(req.query);
// });


// app.post('/email', (req, res) => {
//     res.json({ 
//         message: 'Message!'
//     })
// });

// var urlencodedParser = bodyParser.urlencoded({ extended: false });
// app.post('/contact', urlencodedParser, function(req, res){
//     console.log(req.body);
//     res.render('contact', {qs: req.query});
// });

// app.post('/pages/contact', urlencodedParser, function(req, res){
//     console.log(req.body);
//     res.render('/pages/contact', {qs: req.query});
// });


// app.set('views', path.join(__dirname, 'views'));

// app.get('/views', function(req, res){
//     res.render('contact', {
//         title:'Articles'
//     });
// });


// app.post('/pages/contact.html', (req, res) => {
//     //TODO:
//     //send email here
//     console.log('Data: ', req.body.first, req.body.last, req.body.email);
//     var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'black@gmail.com',
//             pass: 'xxxxx'
//         }
//     });


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
    -From ryan-stefan@http://node-env.eba-zupmejhc.us-east-1.elasticbeanstalk.com/contact.html
    </p>  
  `;

  // E-mail
  
  var transporter = nodemailer.createTransport({
      service:'gmail',
      auth:{
          user: process.env.EMAIL,
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