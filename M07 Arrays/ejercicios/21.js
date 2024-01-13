function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  // let multiplo = 0;
    for (let i = 0; i < secuencia.length; i++) {
      const numero = secuencia[i];

      // Verificar si el número es un múltiplo de n
      if (numero % n === 0) {
        // Si es un múltiplo, detener el bucle y devolver el número
        return numero;
      }
    }

  
}

module.exports = encontrarPrimerMultiploDeN;