canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="blue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(215,210,40,0,2*Math.PI);
ctx.stroke();

color="black"
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(300,210,40,0,2*Math.PI);
ctx.stroke();

color="red"
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(385,205,40,0,2*Math.PI);
ctx.stroke();

color="gold"
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(260,270,40,0,2*Math.PI);
ctx.stroke();

color="green"
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(350,265,40,0,2*Math.PI);
ctx.stroke();

