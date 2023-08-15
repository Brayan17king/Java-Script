/*Se desea realizar la suma de los números pares y la suma de los numeros impares
(Por Aparte), de los números comprendidos desde uno hasta 578934 */

//Creamos la funcion suma 
function suma() {

//Creamos 2 contadores uno para pares y otro para impares
  let sumaPar = 0;
  let sumaInp = 0;

  //Creamos un bucle para recorrer el rango de 1 hasta 578934
  for (let i = 1; i <= 578934; i++) {
    //Validamos si son pares con el modulo, si es par el modulo sera 0
    if (i % 2 == 0) {
        //Sumamos los numeros que cumplen y por ende son pares 
      sumaPar += i;
    //Validamos si son impares con el modulo, si es inpara el modulo dejara un residuo
    } else if (i % 2 != 0) {
        //Sumamos los numeros que cumplen y por ende son impares
      sumaInp += i;
    }
  }
  //Creamos la variable resultado y almacenasmos los valores
  resultado = (`Suma Pares = ${sumaPar}\nSuma Impares = ${sumaInp}`)
  //Retornamos la variable resultado
  return resultado;
}

//Imprimimos el resultado
console.log(suma());
