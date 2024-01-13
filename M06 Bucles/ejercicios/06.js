function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:

  let numero = num.toString();
  return numero.length === 3;
}


module.exports = tieneTresDigitos;
