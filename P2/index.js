console.log("Ejecutando JS...");

display = document.getElementById("display")
suma = document.getElementById("suma")
resta = document.getElementById("resta")
igual = document.getElementById("igual")
multiplicar= document.getElementById("multiplicar")
elevar= document.getElementById("elevar")
raiz=document.getElementById("raiz")
porcentaje = document.getElementById("porcentaje")
clear = document.getElementById("clear")
tecla_DEL = document.getElementById("borrar_ultimo")
coma = document.getElementById("coma")

digitos = document.getElementsByClassName("digito")
const click = new Audio('bambu_1.mp3');
const error = new Audio('error.mp3');
//operandos = document.getElementsByClassName("operandos")

//-- Estados de la calculadora
const ESTADO = {
    INIT: 0,
    OP1: 1,
    OPERATION: 2,
    OP2: 3,
    coma: false,
}
//var operaciones=0;

 //-- Variable de estado de la calculadora
 //-- Al comenzar estamos en el estado incial
 let estado = ESTADO.INIT;   

//-- Función de retrollamada de los digitos
function digito(ev)
{

    if (estado == ESTADO.INIT) {

        display.innerHTML = ev.target.value;

        //-- Pasar al siguiente estado
        estado = ESTADO.OP1;
        click.play();

    } else {
       
        //--En cualquier otro estado lo añadimos
        display.innerHTML += ev.target.value;
        click.play();


    } 
    
}

for (let boton of digitos) {

    boton.onclick = digito;
    click.play();
}
var operaciones =0;
var comas = 0;
function calc_elevar(){
    if (ESTADO==1||ESTADO==3){
        signo=eval(display.innerHTML.replace('^','**'))
    }
}

//-- Operación de sumar
multiplicar.onclick = (ev) => {
    //-- Insertar simbolo de sumar
    
    display.innerHTML += ev.target.value;
    estado= ESTADO.OPERATION;
    operaciones = operaciones + 1;
    if (operaciones>1){
        error.play();
        display.innerHTML = "ERROR DE SINTAXIS";
        operaciones = 0;
        console.log(operaciones);
    }   
    click.play();
}
suma.onclick = (ev) => {
    //-- Insertar simbolo de sumar
    
    display.innerHTML += ev.target.value;
    estado= ESTADO.OPERATION;
    operaciones = operaciones + 1;
    if (operaciones>1){
        error.play();
        display.innerHTML = "ERROR DE SINTAXIS";
        operaciones = 0;
        console.log(operaciones);
    }   
    click.play();
}
resta.onclick = (ev) => {
    click.play();
    display.innerHTML += ev.target.value;
    estado= ESTADO.OPERATION;
    operaciones = operaciones + 1;
    if (operaciones>1){
        error.play();
        display.innerHTML = "ERROR DE SINTAXIS";
        operaciones = 0;
        console.log(operaciones);
    }   
    
}
porcentaje.onclick=()=>{
    click.play();
    display.innerHTML = (display.innerHTML/100);
    operaciones = operaciones + 1;
    if (operaciones>1){
        error.play();
        display.innerHTML = "ERROR DE SINTAXIS";
        operaciones = 0;
        console.log(operaciones);
    }  
    
}
raiz.onclick=()=>{
   
    click.play();
    display.innerHTML = Math.sqrt(display.innerHTML);
    operaciones = operaciones + 1;
    if (operaciones>1){
        error.play();
        display.innerHTML = "ERROR DE SINTAXIS";
        operaciones = 0;
        console.log(operaciones);
    }  
    
}
//-- Evaluar la expresion
igual.onclick = () => {
    click.play();
    //-- Calcular la expresión y añadirla al display
    display.innerHTML = eval(display.innerHTML);
    operaciones = 0

}


clear.onclick = () => {
    click.play();
  display.innerHTML = "0";
  estado = ESTADO.INIT;
  operaciones=0;
}
tecla_DEL.onclick =()=>{
    click.play();
    if (display.innerHTML=="0"){
        display.innerHTML = "0";
    }else{
        display.innerHTML=display.innerHTML.substring(0,display.innerHTML.length -1)
        if (display.innerHTML.length<1){
            display.innerHTML = "0";
            estado = ESTADO.INIT;
        }
    }
}
coma.onclick = (ev) => {
    //-- Insertar simbolo de sumar
    click.play();
    display.innerHTML += ev.target.value;
    ESTADO.coma=true;
    estado= ESTADO.coma;
    comas = comas + 1;
    if (comas>2){
        error.play();
        display.innerHTML = "ERROR DE SINTAXIS";
        comas = 0;
        console.log(comas);
    }   
  
}
