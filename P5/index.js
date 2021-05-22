//----- Obtener elemento de video y configurarlo
let directo = document.getElementById("directo");
const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const video3 = document.getElementById("video3");
const btn_video1 = document.getElementById("btn_video1");
const btn_video2 = document.getElementById("btn_video2");
const btn_video3 = document.getElementById("btn_video3");
const btn_test = document.getElementById("btn_test");
const btn_src_on = document.getElementById("btn_src_on");
const btn_src_off = document.getElementById("btn_src_off");
const btn_auto = document.getElementById("btn_auto");
const btn_manual = document.getElementById("btn_manual");
const btn_loop = document.getElementById("btn_loop");
var cont=0;
var selector=0;



//-- Establecer las dimensiones de los vídeos
directo.width=600;
directo.height=300;
video1.width=300;  
video1.height=200;
video2.width=300;  
video2.height=200;
video3.width=300;  
video3.height=200;

//-- Imagen de Test usada
const TEST_IMAGE_URL = "test.jpg";

//-- Imagen estática a mostrar cuando el video no
//-- ha arrancado
directo.poster = TEST_IMAGE_URL;
video1.poster = TEST_IMAGE_URL;
video2.poster = TEST_IMAGE_URL;
video3.poster = TEST_IMAGE_URL;

//-- Boton de FUENTES-ON
btn_src_on.onclick = () => {
 
  //-- Establecer la fuente de la cámara 1
  video1.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4";
  video2.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4";
  video3.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4";

  //-- Reprodeucimos un vídeo, desde el comienzo
  video1.currentTime = 0;
  video2.currentTime = 0;
  video3.currentTime = 0;
  video1.play();
  video2.play();
  video3.play();

  //-- Y en silencio...
  video1.muted=true;
  video2.muted=true;
  video3.muted=true;

  //-- En la emisión en directo ponemos la imagen de prueba
  directo.poster = TEST_IMAGE_URL;
  normal();
};
//-- Boton de FUENTES-ON
btn_src_off.onclick = () => {
    console.log("SE PARAAAA")
    //-- Reprodeucimos un vídeo, desde el comienzo

    video1.pause();
    video2.pause();
    video3.pause();
  
    //-- Y en silencio...
    video1.muted=true;
    video2.muted=true;
    video3.muted=true;
  
    //-- En la emisión en directo ponemos la imagen de prueba
    directo.poster = TEST_IMAGE_URL;
    directo.src = null;
    video1.poster = TEST_IMAGE_URL;
    video1.src = null;
    video2.poster = TEST_IMAGE_URL;
    video2.src = null;
    video3.poster = TEST_IMAGE_URL;
    video3.src = null;
};

//-- Botón de Test
btn_test.onclick = () => {
    directo.poster = TEST_IMAGE_URL;
    directo.src = null;
};

//-- Botón de Selección de la cámara 1
function normal (){
    btn_video1.onclick = () => {
    directo.src = video1.src;
    directo.currentTime = video1.currentTime;
    directo.play();
    directo.poster=null;
    selector=1;

    };
    btn_video2.onclick = () => {
    directo.src = video2.src;
    directo.currentTime = video2.currentTime;
    directo.play();
    directo.poster=null;
    selector = 2;
    };
    btn_video3.onclick = () => {
    directo.src = video3.src;
    directo.currentTime = video3.currentTime;
    directo.play();
    directo.poster=null;
    selector=3;
    };
}


function automatico() {
    if(cont == 0){
        directo.src = video1.src;
        directo.currentTime = video1.currentTime;
        directo.play();
        directo.poster=null;
        cont = cont+1;
    }
    else if(cont == 1){
        directo.src = video2.src;
        directo.currentTime = video2.currentTime;
        directo.play();
        directo.poster=null;
        cont=cont+1;
    }
    else if (cont== 2){
        directo.src = video3.src;
        directo.currentTime = video3.currentTime;
        directo.play();
        directo.poster=null;
        cont=cont+1;
    
    }
    else if(cont == 3){
        video1.pause();
        video2.pause();
        video3.pause();
        directo.src = null;
        directo.poster=TEST_IMAGE_URL;
    }

}
function loop() {
    if(selector == 1){
        directo.src = video1.src;
        directo.currentTime = video1.currentTime;
        directo.play();
        directo.poster=null;
        
    }
    else if(selector == 2){
        directo.src = video2.src;
        directo.currentTime = video2.currentTime;
        directo.play();
        directo.poster=null;
        
    }
    else if(selector == 3){
        directo.src = video3.src;
        directo.currentTime = video3.currentTime;
        directo.play();
        directo.poster=null;
        
    }

}
btn_manual.onclick= () =>{
    automatico = false;
    normal();
}

btn_auto.onclick= () =>{
    setInterval('automatico()',3000)
}
btn_loop.onclick = ()=>{

    setTimeout('loop()',2000)

}