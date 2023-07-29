canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

/*
    Usa la función beginPath() para empezar un path.
    Luega, usa strokeStyle para establecer el color a "grey".
    Usa lineWidth para establecer el ancho a 1.
    Usa rect() para crear un rectángulo en 150 y 143
con un ancho de 430 y una altura de 200.
*/

ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 1;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 1;
ctx.arc(150, 143, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.arc(350, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 1;
ctx.arc(210, 40, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 1;
ctx.arc(300, 250, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 1;
ctx.arc(100, 250, 40, 0, 2 * Math.PI);
ctx.stroke();

//  350 y 210

//  210 y 40

//  300 y 250

//  400 y 250