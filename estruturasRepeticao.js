for (var i = 0; i < 10; i++){
    //console.log(i);
}
var carros = ["Gol", "Palio", "Uno", "Celta", "Sandero"];


//do começo para o final
for (var i = 0; i < carros.length; i++) {
    //console.log(carros[i]);
}

//do final para o começo
for (var i = carros.length - 1; i >= 0; i--) {
    //console.log(carros[i]);
}

var i = 0;
while (i < carros.length) {
    //console.log(carros[i]);
    i++;
}

/*while (true) {
   // infinitos olás console.log("Olá");
}*/

var i = 0;
while (i < carros.length) {
     if (carros[i] === "Palio") {
        //console.log("encontrei o Palio");
        break;
    }
    i++;
}

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var i = 0;
while (i < numeros.length) {
    var num = numeros [i];
    i++;
   
    if (num % 2 === 0) {
        //console.log(num + " é par");
        continue; //volta a iniciar a estrutura
}

    //console.log(num + " é impar");
}

var j = 30;
do {
    j++;
    //console.log(j);
} while (j < 10);

for (var carro of carros) {
    console.log(carro);
}