const nombre = "Leonardo";
const edad = 39;
const bebidaMayorEdad= "cerveza";
const bebidaMenorEdad = "jugo"; 

const pedido = `${nombre} dice: "Por favor, quiero beber ${edad >= 18 ? bebidaMayorEdad : bebidaMenorEdad}"`
console.log (pedido);
