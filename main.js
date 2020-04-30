var canvas = document.getElementById("c");
var ctx = c.getContext("2d");
var W = canvas.width = window.innerWidth;
var H = canvas.height = window.innerHeight;
var mousePos = {x:100, y:-100};

var rad = Math.PI / 180;

function Draw() {
  ctx.fillStyle = "RGBA(221, 203, 175, 0.3)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  heart(12);
  heart(10);
  heart(8);
  heart(6);
  heart(4);
  heart(2);
  
  window.requestAnimationFrame(Draw); 
}

function heart(size) {
  for(var i=0; i<360; i++) {
    t = i;
    r = size;
    var x = W/2 + 16 * r * (Math.sin(t * rad) * Math.sin(t * rad) * Math.sin(t * rad));
    var y = H/2 - 13 * r * Math.cos(t * rad) +
        5 * r * Math.cos(2 * t * rad) +
        2 * r * Math.cos(3 * t * rad) +
        r * Math.cos(4 * t * rad);
    ctx.beginPath(); 
    ctx.moveTo(x,y);
    ctx.lineTo(x + mousePos.x*0.2*Math.random(), y + mousePos.y*0.2*Math.random());
    ctx.lineWidth = 1;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#232323";
    ctx.stroke();
    ctx.closePath();
  }
}

window.requestAnimationFrame(Draw);

function getRelativeMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: Math.max(Math.min(evt.clientX - W/2, 100), -100),
    y: Math.max(Math.min(evt.clientY - H/2, 100), -100)
  };
}

canvas.addEventListener('mousemove', function(evt) {
  mousePos = getRelativeMousePos(canvas, evt);
}, false);

window.addEventListener('resize', function(e) {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}, false);