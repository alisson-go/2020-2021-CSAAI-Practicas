console.log("Ejecutando JS....")

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc')
const ctx = canvas.getContext('2d');
//colores
const deslizador1 = document.getElementById('deslizador1');
const deslizador2=document.getElementById('deslizador2');
const deslizador3=document.getElementById('deslizador3');
const range_value1 = document.getElementById('range_value1');
const range_value2 = document.getElementById('range_value2');
const range_value3 = document.getElementById('range_value3');
//grises
const grises = document.getElementById('grises');
//-- Función de retrollamada de imagen cargada
//-- La imagen no se carga instantaneamente, sino que
//-- lleva un tiempo. Sólo podemos acceder a ella una vez
//-- que esté totalmente cargada
img.onload = function () {

  console.log("Imagen cargada");

  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original
  canvas.width = img.width;
  canvas.height = img.height;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);
};

function change_color(){
  range_value1.innerHTML = deslizador1.value;
  range_value2.innerHTML = deslizador2.value;
  range_value3.innerHTML = deslizador3.value;
  ctx.drawImage(img, 0,0);
  //-- Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  //-- Obtener el array con todos los píxeles
  let data = imgData.data;
  let umbral1 = deslizador1.value;
  let umbral2 = deslizador2.value;
  let umbral3 = deslizador3.value;

  for (let i = 0; i < data.length; i+=4) {
    if (data[i] > umbral1){
      data[i] = umbral1;
    }
    if(data[i+1] > umbral2){
      data[i+1] = umbral2;
    }
    if(data[i+2] > umbral3){
      data[i+2] = umbral3;
    }
  }
  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);
}
deslizador1.oninput=()=>{
  change_color();
}
deslizador2.oninput=()=>{
  change_color();
}
deslizador3.oninput=()=>{
  change_color();
}
      
grises.onclick = () => {
  console.log("grises");
  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  //-- Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  //-- Obtener el array con todos los píxeles
  let data = imgData.data;


  //-- Filtrar la imagen según el nuevo umbral
  for (let i = 0; i < data.length; i+=4) {
    console.log("datas");
    red = data[i];
    green = data[i+1];
    blue = data[i+2];
    brillo = (3*red + 4*green + blue)/8;
    data[i] = data[i+1] = data[i+2] = brillo;
  }
  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);
}

console.log("Fin...");