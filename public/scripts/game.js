// This will help create the shape game.

var state = "hidden";
var colors = ["red", "orange", "yellow", "green", "cyan", "blue", "purple"];
var shapes = ["rectangle", "square", "circle", "ellipse", "triangle"];

// setInterval(function(){ alert("Hello"); }, 3000);
var interval;
var clicks = [];

// This draws the shapes
function shapeTrans() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var buttonStart = document.getElementById("playGame");

  canvas.style.margin = '1px';
  ctx.canvas.width  = document.body.offsetWidth;
  ctx.canvas.height = document.body.offsetWidth;
  document.getElementById("canvas").style.border = "thick solid black";
  instructions(ctx);
  // shapesGame();
} // end shapeTrans


// A function to randomly select a shape or color
function random(min, max) {
  return Math.random() * (max - min) + min;
} // end random


// Draws shapes
function shapesGame(x, y) {

  this.shape = shapes[Math.floor(random(1,6))-1];
  this.color = colors[Math.floor(random(1,7))-1];
  var ranHeight = Math.floor((Math.random() * 100) + 1);
  var ranWidth = Math.floor((Math.random() * 100) + 1);
  var ranRadius = Math.floor((Math.random() * 100)+ 1);
  var ranXRad = Math.floor((Math.random() * 100)+ 1);
  var ranYRad = Math.floor((Math.random() * 100)+ 1);
  var ranRot = Math.floor((Math.random() * 360) + 1);
  var triLine1 = Math.floor((Math.random() * x) + 1);
  var triLine2 = Math.floor((Math.random() * y) + 1);
  var triLine3 = Math.floor((Math.random() * y) + 1);
  var triLine4 = Math.floor((Math.random() * y) + 1);

  if (this.shape == "rectangle") {
    // Rectangle
    var rec = canvas.getContext("2d");
    rec.fillStyle = this.color;
    rec.fillRect(x, y, ranWidth, ranHeight);
  } else if (this.shape == "square") {
    // Square
    var sq = canvas.getContext("2d");
    sq.fillStyle = this.color;
    sq.fillRect(x, y, ranWidth, ranHeight);
    sq.fill();
  } else if (this.shape == "circle") {
    // Circle
    // cir.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    var cir = canvas.getContext("2d");
    cir.beginPath();
    cir.arc(x, y, ranRadius, 0, 2 * Math.PI);
    cir.fillStyle = this.color;
    cir.fill();
    cir.stroke();
    cir.closePath();
  } else if (this.shape == "triangle") {
    // Triangle
    var tri = canvas.getContext("2d");
    tri.fillStyle = this.color;
    tri.beginPath();
    tri.moveTo(x, y);
    tri.lineTo(triLine1, triLine2);
    tri.lineTo(triLine3, triLine4);
    tri.fill();
    tri.closePath();
  } else if (this.shape == "ellipse") {
    // Ellipse
    // elip.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);
    var elip = canvas.getContext("2d");
    elip.beginPath();
    elip.ellipse(x, y, ranXRad, ranYRad, ranRot, 0, 2 * Math.PI);
    elip.fillStyle = this.color;
    elip.fill();
    elip.stroke();
    elip.closePath();
  } else {

  }
} // end shapes



// Writes out instructions in the canvas
function instructions(ctx) {
  ctx.textAlign = "center";
  ctx.font = "20px Helvetica";
  // ctx.textBaseline = "middle";
  ctx.fillText("Please click on 5 arbitrary spots within this box, and see my shape transformation magic to happen.", 700, 100);
  ctx.fillText("Click play to reset and start over!", 700, 125);
} // end instructions



// Captures clicks
function captureClick(event) {
  var x = event.offsetX;
  var y = event.offsetY;
  clicks.push([x, y]);
  shapesGame(x, y);

  // for (var i in clicks) {
  //   console.log(clicks);
  //   for (var j in clicks[i]) {
  //     console.log(" " + clicks[i][j]);
  //   }
  // }
} // end captureClick
