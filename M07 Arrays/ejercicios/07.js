function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  const arrayEnMayusculas = array.map(function(elemento) {
    // Verificar si el elemento es un string
    if (typeof elemento === 'string') {
      // Convertir a mayúsculas y devolver el resultado
      return elemento.toUpperCase();
    } else {
      // Si el elemento no es un string, simplemente devolverlo sin modificar
      return elemento;
    }
  });
  return arrayEnMayusculas;
}

module.exports = convertirStringAMayusculas;
