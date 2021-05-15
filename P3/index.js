console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//-- Definir el tamaño del convas
canvas.width = 500;
canvas.height = 600;

let x_ball=0;
let y_ball=570;
let velx=3;
let velballx= 3;
let x_racket= (canvas.width)/2;
let y_racket=canvas.height-10;

const LADRILLO = {
    F: 4,  // Filas
    C: 20,  // Columnas
    w: 30,
    h: 20,
    origen_x: 20,
    origen_y: 20,
    padding: 5,
    visible: true
};
const ladrillos = [];

for (let i = 0; i < LADRILLO.F; i++) {
    ladrillos[i] = [];
    for (let j = 0; j < LADRILLO.C; j++) {
      ladrillos[i][j] = {
          x_ball: (LADRILLO.w + LADRILLO.padding) * j,
          y_ball: (LADRILLO.h + LADRILLO.padding) * i,
          w: LADRILLO.w,
          h: LADRILLO.h,
          padding: LADRILLO.padding,
          visible: LADRILLO.visible
        };
    }
}

//ladrillos[0][1].visible = false;

//-- Dibujar ladrillos
for (let i = 0; i < LADRILLO.F; i++) {
    for (let j = 0; j < LADRILLO.C; j++) {

      //-- Si el ladrillo es visible se pinta
      if (ladrillos[i][j].visible) {
        ctx.beginPath();
        ctx.rect(ladrillos[i][j].x_ball, ladrillos[i][j].y_ball, LADRILLO.w, LADRILLO.h);
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.closePath();
      }
    }
}
function ball(){
  ctx.beginPath();
  ctx.arc(x_ball,y_ball,10,0,2*Math.PI);
  ctx.strokeStyle = 'blue';
  ctx.lineWidth = 3;
  ctx.fillStyle = 'yellow';

  //-- Dibujar el trazo
  ctx.stroke()

  //-- Dibujar el relleno
  ctx.fill()

  ctx.closePath()
}
function racket(){
  ctx.beginPath();
  ctx.rect(x_racket, y_racket, 40, 20);

    //-- Dibujar
  ctx.fillStyle = 'red';

    //-- Rellenar
  ctx.fill();

    //-- Dibujar el trazo
  ctx.stroke()
  ctx.closePath();
}

function update()
{
  console.log("test");
  if (x_ball < 0 || x_ball >= (canvas.width - 20) ) {
    velx = -velx;
  }
  x = x_ball + velx;
  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Dibujar los elementos visibles
  
  racket();
  ball()
  //-- 4) Volver a ejecutar update cuando toque

  requestAnimationFrame(update);

//-- Cada objeto a dibujar lo delimitaremos 
//-- por los métodos beginPath() y closePath()


 
}
update()
