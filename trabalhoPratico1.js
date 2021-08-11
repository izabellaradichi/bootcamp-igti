var n = 987;
var divisores = [];


for (var i = 1; i <= n; i++) {
    if (n % i === 0) {
        divisores++;
    }
}
if (divisores === 2) {
    console.log("O numero "+n+" é um numero primo");
} else {
    console.log("O numero "+n+" não é um numero primo");
}



