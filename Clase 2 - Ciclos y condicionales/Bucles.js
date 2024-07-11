// ============ FOR ============

// Ejemplo 1

for( var i = 0; i < 10 ; i++){
    console.log(i);
}
console.log("Hemos salido del bucle");
console.log(i);

// Ejemplo 2
//   indice:  0 1 2 3 5 6 7 8 9
let cadena = "Hola mundo"
for( let i = 0; i< 10 ; i++){
    console.log(cadena[i]);
}

// Cadena "Hola Mundo"
//  Indices
//  
//  0 1 2 3 4 5 6 7 8 9
// [H o l a   M u n d o]

// Ejemplo 3
// Imprime los valores pares en un bucle for
let variable = 1;
let variable2 = 1;
variable = variable + 3;
variable2 += 3; // lo mismo que poner variable2 = variable2 + 3;
console.log(variable);
console.log(variable2);
for( let i = 2 ; i <= 20 ; i = i + 2){
    console.log(i);
}

for( let i = 1 ; i <= 20 ; i++){
    if( i % 2 == 0) 
        console.log(i);
}


// Ejercicio 1
// Imprime el hola mundo al revés
cadena = "Hola mundo";
for( let i = 9; i>=0 ; i--){
    console.log(cadena[i]);
}

// Ejercicio 2
// Suma los primeros 20 números impares en un bucle FOR
var variableVar = 0;
let variableLet = 0;
const variableConst = 3.1416;
let resultado = 0;
for( let i = 1; i<=20 ; i++){ // i = i + 3
	if( i%2 != 0 ) resultado += i;
    console.log(resultado);
}
console.log(resultado);

