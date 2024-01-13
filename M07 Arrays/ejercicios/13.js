function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  // let resultado = 0;
   let suma =0;
  for (let i = 0; i<resultadosTest.length; i++){
    suma += resultadosTest[i]; 
  }
  let resultado = suma / resultadosTest.length;
   return resultado;
}

module.exports = promedioResultadosTest;
