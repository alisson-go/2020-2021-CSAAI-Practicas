console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//-- Definir el tamaño del convas
canvas.width = 500;
canvas.height = 600;
//coordenadas para la pelota
let x_ball=0;
let y_ball=570;

let velx=3;
let vely= 3;
//coordenadas para la raqueta
let x_racket= (canvas.width)/2;
let y_racket=canvas.height-10;
//coordenadas para los ladrillos
let x_ladrillos = 20;
let y_ladrillos = 20;

var score=0;
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
          x_ladrillos: (LADRILLO.w + LADRILLO.padding) * j,
          y_ladrillos: (LADRILLO.h + LADRILLO.padding) * i,
          w: LADRILLO.w,
          h: LADRILLO.h,
          padding: LADRILLO.padding,
          visible: LADRILLO.visible
        };
    }
}

//ladrillos[0][1].visible = false;


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
function draw_ladrillos(){
  //-- Dibujar ladrillos
  for (let i = 0; i < LADRILLO.F; i++) {
    for (let j = 0; j < LADRILLO.C; j++) {

      //-- Si el ladrillo es visible se pinta
      if (ladrillos[i][j].visible) {
        ctx.beginPath();
        ctx.rect(ladrillos[i][j].x_ladrillos, ladrillos[i][j].y_ladrillos, LADRILLO.w, LADRILLO.h);
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}
function colision_ladrillos(){
  for (let i = 0; i < LADRILLO.F; i++) {
    for (let j = 0; j < LADRILLO.C; j++) {
      var lad = ladrillos[i][j];
      if(lad.status==1){
        if(x_ball > lad.x && x_ball<lad.x+LADRILLO.w && y_ball>lad.y && y_ball< lad.y + LADRILLO.h){
          vely = -vely;
          lad.status = 0;
          score++;
          if(score == LADRILLO.F*LADRILLO.C){
            alert("HAS GANADO!")
            document.location.reload();
          }
        }
      }
    }
  }
}
function dibujar_score(){
  ctx.font = "16px arial";
  ctx.fillStyle = "white";
  ctx.fillText("Score: "+score,8,20)
}
function update()
{
  console.log("test");
  if (x_ball < 0 || x_ball >= (canvas.width - 20) ) {
    velx = -velx;
  }
  if (y_ball <= 100 || (y_ball > canvas.height && x_ball>=x_racket)) {
    vely = -vely;
  }

  x_ball = x_ball + velx;
  y_ball = y_ball - vely;
  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Dibujar los elementos visibles
  //-- Dibujar ladrillos
 
  draw_ladrillos();
  
  racket();
  ball();
  dibujar_score();
  colision_ladrillos();
 // colision_ladrillos();
  

  //-- 4) Volver a ejecutar update cuando toque

  requestAnimationFrame(update);

//-- Cada objeto a dibujar lo delimitaremos 
//-- por los métodos beginPath() y closePath()
document.body.onkeydown= function(event){
  switch(event.keyCode){
      case 37: // Izquierda
        if(x_racket > 0){
          x_racket=x_racket - 10; 
        }
              
        break;
      case 39: // Derecha
        if(x_racket<=canvas.width-50){
          x_racket=x_racket + 10;  
        }     
        break;

  }
}
}
update()
window.addEventListener("load",function(){
  document.getElementById("play").addEventListener("click",playmusic);
  document.getElementById("mute").addEventListener("click",mutemusic);
});
function playmusic(){
	var sonido = document.createElement("iframe");
	sonido.setAttribute("src","naruto.mp3");
	document.body.appendChild(sonido);
	document.getElementById("play").removeEventListener("click",playmusic);
}

function mutemusic(){
	var iframe = document.getElementsByTagName("iframe");

	if (iframe.length > 0){
		iframe[0].parentNode.removeChild(iframe[0]);
		document.getElementById("play").addEventListener("click",playmusic);
	}
}
