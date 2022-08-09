// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var array = [];
  var claves = Object.keys(objeto);
  var valores = Object.values(objeto);
  for (i = 0; i < claves.length; i++) {
    array.push( [claves[i], valores[i]] );
  }
  return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

   var obj = {};

  function contarLetra(letra) {
    contador = 0;
    for ( let j = 0; j < string.length; j++) {
      if (letra === string[j]) {
        contador = contador + 1;
      }
    }
    if (contador != 0) {
      obj[letra] = contador;
    }
  }
    
  for ( i = 0; i < string.length; i++ ) {
    if (!obj.hasOwnProperty(string[i])) { 
      contarLetra(string[i]);
    }
  }
  return obj;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var stringOriginal = s;
  var stringMinuscula = s.toLowerCase();
  var newStringMayuscula = '';
  var newStringMinuscula = '';
  for (i = 0; i < stringOriginal.length; i++) {
    if (stringMinuscula[i] != stringOriginal[i]) {
      newStringMayuscula = newStringMayuscula + stringOriginal[i]; 
    } else {
      newStringMinuscula = newStringMinuscula + stringOriginal[i];
    }
  }
  return newStringMayuscula + newStringMinuscula
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  
  var arrayPalabras = str.split(" ");
  var espejo = [];
  
  function arrayEspejo(palabra) {
    var palabraEspejo = '';
    for ( j = palabra.length-1; j >= 0; j--) {
      palabraEspejo = palabraEspejo + palabra[j];
    }
    return palabraEspejo;
  }

  for ( i = 0; i < arrayPalabras.length; i++) {
    espejo[i] = arrayEspejo(arrayPalabras[i]);
  }
  
  var strEspejo = '';
  for (i = 0; i < espejo.length; i++) {
    strEspejo = strEspejo + espejo[i];
    if (i < espejo.length - 1) { strEspejo = strEspejo + ' ' };
  }
  return strEspejo;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  var numeroStr = numero.toString();
  var numeroEspejo = '';

  //doy vuelta numeroStr y lo guardo en numeroEspejo
  for ( j = numeroStr.length-1; j >= 0; j--) {
    numeroEspejo = numeroEspejo + numeroStr[j];
  }

  //comparo numeroEspejo y numeroStr
  for (i = 0; i < numeroStr.length; i++) {
    if (numeroStr[i] != numeroEspejo[i]) { 
      return "No es capicua" 
    }
  }
  return "Es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  var nuevaCadena = '';
  for (i = 0; i < cadena.length; i++ ) {
    letra = cadena[i];
    if ( letra === 'a' || letra === 'b' || letra === 'c' ) {
      } else { nuevaCadena = nuevaCadena + letra}
  }
  return nuevaCadena
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  var arrLong = [];
  var auxLong = 0;

  function rotar(mayor, menor) {
    auxStr = arr[mayor];
    arr[mayor] = arr[menor];
    arr[menor] = auxStr
    return
  }

  for (i = 0; i < arr.length; i++ ) {
    arrLong[i] = arr[i].length;
  }

  for ( i = 0; i < arrLong.length - 1; i++ ) {
    auxLong = arrLong[i];
    for ( j = i + 1; j < arrLong.length; j++) {
      if (auxLong > arrLong[j]) {rotar(i, j) }
    }
  }
  return arr
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  var union = [];

  for ( i = 0; i < arreglo1.length; i++ ) {
    for ( j = 0; j < arreglo2.length; j++ ) {
      if ( arreglo1[i] === arreglo2[j] ) {
        union.push(arreglo2[j]);
        break
      }
    }
  }
  return union;

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

