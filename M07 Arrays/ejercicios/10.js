function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  let indiceMayor = 0;
  let arrayMayor = array[0];
  for (let i = 1 ; i < array.length ; i++){
    if (array[i] > arrayMayor){
      arrayMayor = array[i];
      indiceMayor = i;
    }
    
  }
  return indiceMayor;
}

module.exports = encontrarIndiceMayor;
