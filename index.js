const express = require('express');
const http = require('http');
const fs = require('fs');
const url = require('url');
const nodemailer = require('nodemailer');
const path = require('path');
const bodyParser = require('body-parser');
const { response } = require('express');
const qs = require('querystring');

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


const port = process.env.PORT || 3000;
app.listen(port, () => {
    // console.log("Hello World");
});

// var jsonParser = bodyParser.json();
// var urlencodedParser = bodyParser.urlencoded({extended: false});


// app.post('/contact2', (req, res) => {
//   console.log('Data: ', req.query.email);
//   return res.send(req.query);
// });


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/contact', function(request, response) {
  console.log('GET /')
  // var html = `
  //   <html>
  //       <body>
  //           <form method="post" action="http://localhost:3000"> 
  //               <input type="text" name="name" />
  //               <input type="submit" value="Submit" />
  //           </form>
  //       </body>
  //   </html>`
  response.writeHead(200, {'Content-Type': 'text/html'})
  response.end(html)
})

app.post('/contact', function(request, response) {
  console.log('POST /')
  console.dir(request.body)
  response.writeHead(200, {'Content-Type': 'text/html'})
  response.end('thanks')
})


// var data = fs.readFileSync('words.json');
// var words = JSON.parse(data);
// console.log(words);


// app.post('contact', urlencodedParser, function(req, res) {
//     console.log(req.body);
//     res.render('contact', {qs: req.query});
// });


// app.post('/contact.html', (req, res) => {
//     console.log('Data: ', req.body,first);
// });


// app.use(bodyParser());

// app.post('/words', function(req, res) {
//     // res.end(JSON.stringify(words, null, 2));
//     return res.redirect('/about');
// });

// app.get("/words", (req, res) => {

// })

// app.use(express.urlencoded({
//     extended: false
// }));
// app.use(express.json());

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

// app.get('/', function(req, res) {
//     return res.redirect('/contact');
// });

// app.get('/contact', function(req, res) {
//     return res.render('contactForm')
// });

// app.get('/contact', function(req, res) {
//     return res.render('contact');
// });

// app.get('/submit', function(req, res) {
//     return res.send(req.query);
// });

// app.get('/submit', function(req, res) {
//     return res.send(req.body.first);
//     console.log(req.body.first);
// });

// E-mail

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// var transporter = nodemailer.createTransport({
//     service:'gmail',
//     auth:{
//         user:'rms355@gmail.com',
//         pass:'yijukcnnfaqhbhnq'
//     }
// });



// var mailOptions = {
//     from:'rms355@gmail.com',
//     to:'rms355@gmail.com',
//     subject:'Node JS Test Mail',
//     text:'This is test mail from node.js app.'
// };

// transporter.sendMail(mailOptions, function(err, info){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('E-mail sent:' + info.response);
//     }
// });