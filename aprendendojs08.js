function somar(){
    var n1 = document.getElementById("txtN1").value;
    var n2 = document.getElementById("txtN2").value;
    var resultado = parseFloat(n1) + parseFloat(n2);
    document.getElementById("txtResult").value = resultado;

}

function subtrair(){
    var n1 = document.getElementById("txtN1").value;
    var n2 = document.getElementById("txtN2").value;
    var resultado = parseFloat(n1) - parseFloat(n2);
    document.getElementById("txtResult").value = resultado;

}

function multiplicar(){
    var n1 = document.getElementById("txtN1").value;
    var n2 = document.getElementById("txtN2").value;
    var resultado = parseFloat(n1) * parseFloat(n2);
    document.getElementById("txtResult").value = resultado;


}

function dividir(){
    var n1 = document.getElementById("txtN1").value;
    var n2 = document.getElementById("txtN2").value;
    var resultado = parseFloat(n1) / parseFloat(n2);
    document.getElementById("txtResult").value = resultado;


}