//función sin parametros
function saludar(){
    console.log('Hola!');
}


//funcipin con parametro
function mostrarTexto(texto){
    console.log(texto);
}

//Parametro por defecto
function mostrarTexto1(texto1 = 'Texto por defecto1'){
    console.log(texto1)
}

//Parametro por defecto
function mostrarTexto2(texto2 = 'Texto por defecto2'){
    console.log(texto2)
}

//ejecuto 
saludar();
mostrarTexto('Este es un terxto dínmaico');
mostrarTexto1('Este es un texto dinamico1');
mostrarTexto2();
