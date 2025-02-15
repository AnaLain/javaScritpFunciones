const edad =   39;
const edadUsuario = "39";
const edadUsuario2 = "39a";

console.log(edad == edadUsuario); 

//Implicita rta 3939
console.log(edad + edadUsuario);

//Explicita
console.log(edad + Number(edadUsuario));
//String
console.log(String(edad) + edadUsuario);
//NaN
console.log(edad + Number(edadUsuario2));
//toString
console.log(edad.toString()+ edadUsuario)