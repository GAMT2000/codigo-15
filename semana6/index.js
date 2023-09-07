const nombre = "Gadiel";
const apellido = "Vizcardo";
const dni = 77777;

const datos = nombre + " " + apellido + " " + dni;
const datos2 = `Datos: ${nombre} ${apellido} ${dni}`;

console.log("Concatenacion", datos);
console.log("Template string", datos2);

// formas de console
console.log("Info");
console.error("Error en consola");
console.warn("Warning in console");

//Operadores matematicos
console.log("Suma1", 2 + 2);
console.log("Suma2", 2 + "2");
console.log("Resta1", 20 - 10);
console.log("Resta2", 20 - "5");
console.log("Division1", 1300 / 5);
console.log("Division2", 1300 / "5");
console.log("Multiplicacion", 23 * 6);
console.log("Residuo MOOD", 40 % 5);
console.log("Residuo MOOD", 40 % 3);
console.log("Raiz cuadrada", Math.sqrt(100));
console.log("Potencia", Math.pow(4, 0.5));
console.log("Potencia", 4 ** 2);
console.log("PI", Math.PI);

//Operadores de comparacion retornan un boolean (true/false)
//Igualdad
//Doble igual solo compara el valor
console.log(2 == "2");
//Triple igual compara el valor y el tipo de dato
console.log(2 === "2");
//Diferecia
console.log("Diferencia", 2 != "2");
console.log("Diferencia", 2 !== "2");
//Mayor menor...
console.log(100 > 10);
console.log(10 > 100);
console.log(10 < 100);
console.log(100 < 10);
console.log(101 >= 100);
console.log(101 <= 100);

//Condicionales
console.log("=========== Condicionales =======");

let edad = 15;

if (edad >= 18) {
  console.log("La persona es mayor de edad");
} else {
  console.log("La persona es menor de edad");
}

const numero = 21; //prompt("Escribe un numero")
console.log(typeof numero);

if (numero % 2 === 0) {
  console.log("El numero es par");
} else {
  console.log("El numero es impar");
}

//and = y = &&
if (numero > 10 && numero < 20 && typeof numero === "number") {
  console.log("Este numero esta entre 10 y 20");
} else {
  console.log("No cumple la condiciones");
}

//or = o = ||
if (numero > 10 || numero < 20 || typeof numero === "number") {
  console.log("Este numero esta entre 10 y 20");
} else {
  console.log("No cumple la condiciones");
}

console.log("===== Fecha ======");
const fecha = new Date();
const hora = fecha.getHours();

if (hora < 12) {
  console.log("Buenos dias");
} else if (hora > 18) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches");
}
