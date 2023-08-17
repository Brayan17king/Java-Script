/*Crear un arreglo de 10 posiciones de números con valores aleatorios
(Investiga como hacerlo). Muestra por consola el índice y el valor al que corresponde.
Usa dos métodos, uno para rellenar valores y otro para mostrar */

//Creamos un Arrai vacio en el cual guardaremos los valores
const numeros = [];

//Creamos la funcion para agregar los valores 
function agregar() {
    //Creamos un ciclo for para que me ayudara a poner los 10 valores
  for (let i = 0; i < 10; i++) {
    //Agregamos los valores al Array de manera random con Math.random()
    numeros.push(Math.floor(Math.random() * 100));
  }
  //Retornamos los valores
  return numeros
}

//Creamos la funcion para mostrar los valores
function mostrar(){
    //creamos un for para agregar los indices del 1 al 10
    for (let i = 0; i < 10; i++) {
        //imprimimos los indices y ponemos los numeros del arreglo
        console.log(`${[i+1]} - ${numeros[i]}`);
    }
}

//llamamos la funcion agregar
 agregar();
 //llamamos la funcion mostrar
 mostrar();

