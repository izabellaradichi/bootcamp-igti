var a = 50;
var b = 40;
if (a > b) {
    //condição a ser executada caso seja verdadeiro
    console.log("a maior do que b");
} else if (b < a) {
    console.log("b é maior do que a");
} else {
    console.log("a e b são iguais");
}

if (a > b) {
    console.log("executar somente se a > b");
}
console.log("sempre executar");

var c = 40;
var d = 30;
if(c >= d) {
    console.log("c maior ou igual a d");
}

var e = 20;
var f = 10;
if (e === f){ //compara o tipo também
    console.log("e é igual a f")
}

var g = 10;
var h = 11;
if (g != h) {
    console.log("g é diferente de h");
}




var i = 4;
var j = 3;
var k = 5;
var l = 5;
if((i > j) && (l > k)) { //and
    console.log("i é maior que j");
}
if ((i === j) || (k === l)) { //or
    console.log("um dos dois eram válidos");
}


if (!(1 > 2)) {
    console.log("execute");
}



var fruta = "abacaxi";
var valor = 0;
if (fruta === "banana") {
    valor = 2;
} else if (fruta === "maca") {
    valor = 3;
} else if (fruta === "abacaxi") {
    valor = 4;
} else if (fruta === "melao") {
    valor = 5;
} else if (fruta === "mamao") {
    valor = 5.50;
} else {
    valor = 10;
}
//

switch(fruta) {
    case "banana":
        valor = 2;
        break;
   case "maca":
        valor = 3;
        break;
    case "abacaxi":
        valor = 4;
        break;
        break;
    case "melao":
        valor = 5;
        break;
    case "mamao":
        valor = 5.50;
        break;
    default:
        valor = 10;  
}       
console.log("valor: " + valor); 


var x = 10;
var y = 2;
var resultado = "";
if(x > y) {
    resultado = "x é maior que y";
} else {
    resultado = "senao";
}
console.log(resultado);

resultado = x > y ? "x maior que y" : "senao"; //operador ternario
console.log(resultado);
