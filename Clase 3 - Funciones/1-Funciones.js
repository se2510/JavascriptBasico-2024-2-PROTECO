/*
    Una funcion es un bloque de codigo reutilizable 
*/

function saludar(){
    console.log("Hola C:");
}

saludar();

function despedirse(){
    console.log("Bai bai");
}

despedirse();


// ======== Funcion con parametros ==============

function suma( a , b ){ // Asignacion
    // a = x;
    // b = y;
    a +=10;
    console.log(a)
    console.log(typeof a);
    console.log(typeof b);
    console.log("La suma es "+ (a+b));
}

let x = 10, y = 3;

suma(x, y);
console.log(x)
//suma( 5 , 6 );





