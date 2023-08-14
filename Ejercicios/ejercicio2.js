/*Crear una funcion que tome un valor de grados Celsius y la pase a grados Fahrenheit
La fórmula correspondiente es : F= 32 + (9* C/5)*/

function grados(celsius){
    fahrenheit = 32 + (9*(celsius/5));
    console.log("Los grados Fahrenheit"+fahrenheit);
}
console.log(grados(23));

