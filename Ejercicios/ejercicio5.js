/*Imprima la siguiente secuencia de ciclos
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
1 2 3 4 5 6 7
1 2 3 4 5 6 7 8
1 2 3 4 5 6 7 8 9
*/

// Definimos el número que vamos a procesar.
const numero = 123456789;

// Convertimos el número en una cadena y luego en un arreglo de caracteres.
let listaNumeros = (numero.toString()).split('');

// Inicializamos una variable temporal para almacenar los dígitos gradualmente.  
let numeroTemporal = '';  

// Iteramos a través de los dígitos del arreglo.
for (i = 0; i < listaNumeros.length; i++) {
    // Agregamos el dígito actual y un espacio a la variable temporal.
    numeroTemporal += listaNumeros[i] + ' ';
    // Imprimimos la variable temporal en cada iteración.
    console.log(numeroTemporal);
}

//Brayan Sneyder Martinez Cardenas 💫