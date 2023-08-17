/*A password manager wants to create new passwords using two strings given by the user, then combined
to create a harder-to-guess combination. Given two strings, interleave the characters of the strings to
create a new string. Beginning with an empty string, alternately append a character from string a and from
string b. If one of the strings is exhausted before the other, append the remaining letters from the other
string all at once. The result is the new password.*/

/*Un administrador de contraseñas quiere crear nuevas contraseñas usando dos cadenas dadas por el usuario, luego combinadas
para crear una combinación más difícil de adivinar. Dadas dos cadenas, intercalar los caracteres de las cadenas para
crear una nueva cadena. Comenzando con una cadena vacía, agregue alternativamente un carácter de la cadena a y de
cadena b. Si una de las cadenas se agota antes que la otra, agregue las letras restantes de la otra
cadena todo a la vez. El resultado es la nueva contraseña. */

//Creamos la funcion ascii para validar cada caracter del string
function ascii(cadena) {
  //iniciamos un for para validar cada caracter
  for (i = 0; i < cadena.length; i++) {
    // Registramos el numero ascii del caracter actual
    let caracter = cadena.charCodeAt(i);
    //validamos que el codigo ascii del caracter pertenezca al intevalo entre [a-z] en la codificacion ASCII
    if (caracter < 97 || caracter > 122) {
      // ASCII A = 97 Z = 122
      return true;
    }
  }
  return false;
}

//Creamos una funcion y le pasamos 2 parametros que seran las cadenas
function password(a, b) {
  //Comprobamos que las cadenas a y b no sean vacias
  if (a == "" || b == "") {
    return "Error no se puede convinar las contraseñas falta una palabra";
    //Comprobamos que las cadenas a y b tengan menos de 25000 caracteres
  } else if (a.length > 25000 || b.length > 25000) {
    return "Error";
  }
  //Comprobamos que tanto a y b tengan caracteres que esten entre [a-z]
  else if ((ascii(a) || ascii(b)) == true) {
    return "Error ingreso caracteres invalidos";
  }
  //Creamos una variable tipo string vacia donde guardaremos nuestra password
  let result = "";
  //Creamos dos contadores tipo entero que contendrán las posiciones en las cadenas a y b
  let i = 0;
  let j = 0;
  //Recorremos las posiciones en las cadenas a y b y agregamos cada una de las letras
  while (i < a.length || j < b.length) {
    if (i < a.length) {
      result += a[i];
      i++;
    }
    if (j < b.length) {
      result += b[j];
      j++;
    }
  }
  //Retornamos nuestra password
  return result;
}
console.log(password("aaa", "fff"));

// Brayan Sneyder Martinez Cardenas 💫
