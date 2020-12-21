var canvas = document.getElementById("myCanvas");
 var ctx= canvas.getContext("2d"); color = "red"; 
ctx.beginpath();
ctx.strokeStyle="red";
ctx.lineWidth= 5;
ctx.arc( 250, 210, 40, 0, 2*Math.PI)