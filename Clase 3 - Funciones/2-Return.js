
// El return de las funciones es lo que devuelve como resultado de la ejecucion de la funcion.

function sumar( a, b){
    return a+b;
}

let resultado = sumar( 2,2 ); // let resultado = 4;
console.log(resultado);

function resta ( a , b ){
    return a-b;
}

let resultado2 = resta( 8 , 2);
console.log(resultado2);

// =========== Multiples return ==============
let lechuga = false;

function sanduich(){
    if ( lechuga == true){
        return "Si tiene lechuga";
    }else{
        return "No tiene lechuga";
    }
}

console.log(sanduich());
console.log( lechuga == true ? "Si tiene lechuga" : "No tiene lechuga" );
console.log(sanduich());

let resultado3 =  (lechuga == true? "Si tiene lechuga" : "No tiene lechuga") ;
console.log(resultado3)

function calculadora( a, b , c , d){
    menu();
    let opcion = 1;
    switch(opcion){
        case 1:
            return a+b;
        case 2: 
            return a-b;
        default:
            console.log("Selecciona la opcion correcta");
    }
}

function menu(){
    console.log("Suma");
    console.log("Resta");
    console.log("Division");
}

console.log(calculadora( 5, 5, 8 , 8));