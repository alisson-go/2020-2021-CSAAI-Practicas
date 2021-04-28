function insert(num)
{
    var digito = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = digito + num;

}
function clean(){
    document.getElementById('resultado').innerHTML = " ";
}
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado)
    {
        document.getElementById('resultado').innerHTML=eval(resultado)
    }
}
function parcial(num){
    var digito = document.getElementById('resultado').innerHTML
    pos=digito.length;
    digito=digito.substr(0,pos-1);
    if(digito==""){
        digito="0";
    } 
    document.getElementById('resultado').innerHTML=digito;
}