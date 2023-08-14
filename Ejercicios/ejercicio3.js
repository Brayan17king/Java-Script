/* Escribe una funcion que tome un array de números y un valor
objetivo como entrada, y devuelve un array de arrays que contenga pares de números
en el array original que sumen al valor objetivo*/

// Ponemos el array a operar
numeros = [2, 4, 3, 6, 9, 8];
//ponemos el objevito al cual vamos a apuntar
target = 10;

//Creamos primero la funcion y le pasamos los 2 argumentos que son el Array y el target
function array(nums, target) {
    //Luego creamos un Array vacio, en el cual insertaremos los numeros.
    const parejas = [];
    
    //Creamos un ciclo que tome el primer numero del array
    for (let i = 0; i < nums.length; i++) {
        //Creamos otro ciclo para que me tome otro numero del array
        for (let j = i + 1; j < nums.length; j++) {
            //validamos si los dos numeros nos dan el valor del target
            if (nums[i] + nums[j] === target) {
                //agregamos los numeros al array parejas 
                parejas.push([nums[i], nums[j]]);
            }
        }
    }
    //retornamos el resultado
    return parejas;
}

//llamamos la funcion y le pasamos los parametros que son el Array y el Target
result = array(numeros, target);
// Debería imprimir: [[2, 8], [4, 6]] que son los numeros que nos suman 10
console.log(result);  


