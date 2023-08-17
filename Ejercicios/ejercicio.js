//Creamos una constante con los numeros
const numero = 123456789;

//Convierto los numeros a una matriz y los almaceno en una variable
const listaNumeros = Array.from(numero.toString());
//Creamos una variable vacia de tipo String
let numeroTemporal = '';


for (const digito of listaNumeros) {
    numeroTemporal += digito + ' ';
    console.log(numeroTemporal);
}
