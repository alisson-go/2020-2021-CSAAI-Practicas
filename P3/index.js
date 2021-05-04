console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del convas
canvas.width = 500;
canvas.height = 600;
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
const ctx = canvas.getContext("2d");
const ball=canvas.getContext("2d")

//-- Cada objeto a dibujar lo delimitaremos 
//-- por los métodos beginPath() y closePath()
ctx.beginPath();
  //-- Definir un rectangulo de dimensiones 100x50,
  //-- cuya esquina superior izquierda está en (5,5)
  ctx.rect(400,560, 100, 40);
  

  //-- Color de relleno del rectángulo
  ctx.fillStyle = 'orange';

  //-- Mostrar el relleno
  ctx.fill();

  //-- Mostrar el trazo del rectángulo
  ctx.stroke();
ctx.closePath()
ball.beginPath();
    ball.arc(400,500,10,0,2*Math.PI);
    ball.strokeStyle = 'blue';
    ball.lineWidth = 3;
    ball.fillStyle = 'yellow';

    //-- Dibujar el trazo
    ball.stroke()

    //-- Dibujar el relleno
    ball.fill()
    
ball.closePath()
const ladrillos = [];

for (let i = 0; i < LADRILLO.F; i++) {
    ladrillos[i] = [];
    for (let j = 0; j < LADRILLO.C; j++) {
      ladrillos[i][j] = {
          x: (LADRILLO.w + LADRILLO.padding) * j,
          y: (LADRILLO.h + LADRILLO.padding) * i,
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
        ctx.rect(ladrillos[i][j].x, ladrillos[i][j].y, LADRILLO.w, LADRILLO.h);
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.closePath();
      }
    }
}
