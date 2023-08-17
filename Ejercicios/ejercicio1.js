/*Acorde con la edad de una persona, imprime el año en que nació.
Por ejemplo "Naciste en 1985" utilizando funciones */


//Creamos la funcion llamada año y le pasamos como parametro la edad de una persona
function año(edad){

    //Definimos el año actual
    añoActual = 2023;
    //Calculamos el año de nacimiento 
    nacimiento = "Naciste en el año" + (añoActual-edad);
    //Retornamos el año de nacimiento
    return nacimiento;
}
//imprimimos en la edad de la persona pasando el nombre de la funcion y el parametro de la edad. 
console.log(año(22));


//Solucion Profesor

function calcular(x){
    actual = 2023
    final = 2023-x
    console.log("El año en el que naciste fue "+final);
}

calcular(22);

//Brayan Sneyder Martinez Cardenas 💫
