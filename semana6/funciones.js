//Bloque de codigo que hara algo

//Recomendaciones
//El nombre de la funcion sea un verbo infinitivo (ar, er ....)

function calcular(n1, n2, operador) {
  if (operador === "+") {
    return n1 + n2;
  } else if (operador === "-") {
    return n1 - n2;
  } else if (operador === "*") {
    return n1 * n2;
  } else if (operador === "/") {
    if (n2 !== 0) {
      return n1 / n2;
    } else {
      return "No es posible dividir entre 0";
    }
  } else {
    return "Operador no identificado/valido";
  }
}

//Siempre debemos llamar a la funcion
console.log(calcular(23, 45, "+"));
console.log(calcular(18, 0, "/"));
console.log(calcular(18, 0, ")"));

function calcular2(n1, n2, operador) {
  if (operador === "+") return n1 + n2;
  if (operador === "-") n1 - n2;
  if (operador === "*") return n1 * n2;

  if (operador === "/") {
    if (n2 === 0) return "No es posible dividir entre 0";
    return n1 / n2;
  }
  return "Operador no identificado/valido";
}

console.log("Usando la funcion mejorada");
console.log(calcular2(23, 45, "+"));
console.log(calcular2(18, 0, "/"));
console.log(calcular2(18, 0, ")"));


function calcular3(n1, n2, operador) {
    if (n2 === 0 && operador === "/") return "No es posbile dividir entre 0"

    const operaciones = {
        "+": n1 + n2,
        "-": n1 - n2,
        "*": n1 * n2,
        "/": n1 / n2,
        "potencia": Math.pow(n1, n2)
    }

    return operaciones[operador] ?? "Operacion no valida"
}

console.log("Usando la version mejorada 2")
console.log(calcular3(23, 45, "+"))
console.log(calcular3(18, 0, "/"))
console.log(calcular3(18, 0, ")"))
console.log(calcular3(4, 6, "potencia"))


function calcular4(n1, n2, operador) {
    try {
        const res = eval(`${n1}${operador}${n2}`) 
        return isFinite(res) ? res : "Operacion no valida"
    }   catch (err) {
        return err
    }
}

console.log("Usando la version mejorada 3")
console.log(calcular4(23, 45, "+"))
console.log(calcular4(18, 5, "*"))
console.log(calcular4(18, 5, "/"))
console.log(calcular4(18, 5, "-"))
console.log(calcular4(18, 5, "**"))
console.log(calcular4(18, 0, ")"))