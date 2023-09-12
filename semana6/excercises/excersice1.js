/*
  Escribe un programa que muestre por consola (con un console) los
  números de 1 a 100 (ambos incluidos y con un salto de línea entre
  cada impresión), sustituyendo los siguientes:
  - Múltiplos de 3 por la palabra "fizz".
  - Múltiplos de 5 por la palabra "buzz".
  - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

// for (let i = 1; i <= 100; i++) {
//   if (i % 15 === 0 ) {
//     console.log("fizzbuzz");
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } else {
//     console.log(i);
//   }
// }


function validateFizzBuzz(numero) {
  const m3 = numero % 3 === 0
  const m5 = numero % 5 === 0
  const m15 = numero % 15 === 0

  const answer = m15 ? "fizzbuzz" : m3 ? "fizz": m5 ? "buzz": numero
  return answer
}

for (let i = 1; i <= 100; i++) {
  console.log(validateFizzBuzz(i))
}