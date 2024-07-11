
let i = 0;
while(i<10){
    console.log(i)
    i++;
}

let condicion = true;
let edad = 10;
while( condicion ){
    if( edad > 0){
        console.log("La condición cambio antes:", condicion);
        condicion = false;
        console.log("La condición cambio despues: ", condicion);
    }else{
        console.log("Por favor ingresa el numero correcto");
    }
}
console.log("Salimos del bucle :D");


// Otro ejemplo
const  limiteMaximo = 10;
let numeroActual = 1;

while( numeroActual < limiteMaximo ){
    console.log(numeroActual);
    numeroActual++;
}
console.log(numeroActual);

// Otro ejemplo

let menu = true;
let num = 0;

while( menu ){ // Bucle para el menu
    if( num == 1 || num == 2 || num == 3 || num == 4 ){
        menu = false;
    }else{
        console.log("Teclea el numero de la opcion que quieras");
        console.log("1. Ver el score");
        console.log("2. Jugar");
        console.log("3. Salir");
        console.log("4. Creditos");
        // Se supone el ussuario pone la informacion pedida
        num = 4; // Pedimos info al usuario y estamos simulando que puso 2
    }
}

if( num == 2){
    console.log("Ahora estas jugando :D");
}else if( num == 4){
    console.log("Estos son los creditos");
}

console.log("Salimos del menu");