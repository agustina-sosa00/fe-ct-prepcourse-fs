function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  let array2 = [];
  let separados = [];
  for (let i = 0; i < arrayOfStrings.length; i++) {
    separados = arrayOfStrings[i].toLowerCase().split("");
   if( separados[0]  === 'a'){
    
      array2.push(separados.join(""));
   }
    
  }
  return array2;
}

module.exports = filter;
