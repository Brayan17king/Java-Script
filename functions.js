//Funcion que no retorna ni recibe parametros

function mensaje() {
  console.log("Soy un mensaje");
}

mensaje();
console.log(mensaje());

//Funcion que no retorna pero recibe parametros
function areaRectangulo(b, h) {
  resultado = b * h;
  console.log(resultado);
}
areaRectangulo(2, 3);

//Funcion que retorna y recibe parametros
function retorno() {
  return "Hola Mundo";
}
retorno();
console.log(retorno());
