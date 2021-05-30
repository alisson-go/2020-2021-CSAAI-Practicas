console.log("Ejecutando JS...");

display = document.getElementById("display")
suma = document.getElementById("suma")
igual = document.getElementById("igual")
multiplicar= document.getElementById("multiplicar")
elevar= document.getElementById("elevar")
raiz=document.getElementById("raiz")
porcentaje = document.getElementById("porcentaje")
clear = document.getElementById("clear")
tecla_DEL = document.getElementById("borrar_ultimo")
coma = document.getElementById("coma")

digitos = document.getElementsByClassName("digito")
//operandos = document.getElementsByClassName("operandos")

//-- Estados de la calculadora
const ESTADO = {
    INIT: 0,
    OP1: 1,
    OPERATION: 2,
    OP2: 3
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
        

    } else {
       
        //--En cualquier otro estado lo añadimos
        display.innerHTML += ev.target.value;


    } 
    
}

for (let boton of digitos) {

    boton.onclick = digito;
}
var operaciones =0;
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
        display.innerHTML = "ERROR DE SINTAXIS";
        operaciones = 0;
        console.log(operaciones);
    }   
  
}
suma.onclick = (ev) => {
    //-- Insertar simbolo de sumar
    
    display.innerHTML += ev.target.value;
    estado= ESTADO.OPERATION;
    operaciones = operaciones + 1;
    if (operaciones>1){
        display.innerHTML = "ERROR DE SINTAXIS";
        operaciones = 0;
        console.log(operaciones);
    }   
  
}
porcentaje.onclick=()=>{

    display.innerHTML = (display.innerHTML/100);
    operaciones = operaciones + 1;
    if (operaciones>1){
        display.innerHTML = "ERROR DE SINTAXIS";
        operaciones = 0;
        console.log(operaciones);
    }  
    
}
raiz.onclick=()=>{
   

    display.innerHTML = Math.sqrt(display.innerHTML);
    operaciones = operaciones + 1;
    if (operaciones>1){
        display.innerHTML = "ERROR DE SINTAXIS";
        operaciones = 0;
        console.log(operaciones);
    }  
    
}
//-- Evaluar la expresion
igual.onclick = () => {
  
    //-- Calcular la expresión y añadirla al display
    display.innerHTML = eval(display.innerHTML);
    operaciones = 0

}


clear.onclick = () => {
  display.innerHTML = "0";
  estado = ESTADO.INIT;
  operaciones=0;
}
tecla_DEL.onclick =()=>{
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
