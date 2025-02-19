//Realizo la función
function sumaYPorcentaje(a,b){
    let c = a+b;
    c *=10/100;

    function multiplicaNumeros(a,b){
        return a * b;
    }
    return c + multiplicaNumeros(a,b);
}

//Llamo la función
const numero1 = sumaYPorcentaje (5,10);

console.log(numero1);
console.log(sumaYPorcentaje(5,10))
console.log(sumaYPorcentaje(5454,10))