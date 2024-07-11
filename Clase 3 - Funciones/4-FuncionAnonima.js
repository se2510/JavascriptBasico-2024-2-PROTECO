// =============== Funcion anonima o funcion de tipo expresión =================
// Hoisting: Es la capacidad de mandarse a llamar antes o después de haberse declarado
//varFuncion()

var varFuncion = function( ){
    console.log("Esta es una función anónima! :D");
}

varFuncion();


// ========== Funciones normales ============

console.log(suma());

function suma(){
    return "Soy una suma";
}

console.log(suma());