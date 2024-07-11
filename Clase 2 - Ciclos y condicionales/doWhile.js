// let num = 0;

// do{
//     console.log("Estamos en el while :D");
// } while ( num == 1 );



// Ejemplo del menu
let menu = true;
let num = 0;
// Do while =======================================
do{
    if( num == 1 || num == 2 || num == 3 || num == 4 ){
        //menu = false;
        break;// El break sirve para salirse de cualquier bucle o condicional.
    }else{
        console.log("Teclea el numero de la opcion que quieras");
        console.log("1. Ver el score");
        console.log("2. Jugar");
        console.log("3. Salir");
        console.log("4. Creditos");
        // Se supone el ussuario pone la informacion pedida
        num = 4; // Pedimos info al usuario y estamos simulando que puso 2
    }
} while (menu);


// While normal ============================================
while( menu ){ // Bucle para el menu
    if( num == 1 || num == 2 || num == 3 || num == 4 ){
        menu = false;
    }else{
        console.log("Teclea el numero de la opcion que quieras");
        console.log("1. Ver el score");
        console.log("2. Jugar");
        console.log("3. Salir");
        console.log("4. Creditos");
        // Se supone el usuario pone la informacion pedida
        num = 4; // Pedimos info al usuario y estamos simulando que puso 2
    }
}

console.log(menu);


// Ejemplo sencillo

let condicion = true;

do{
    console.log("Estamos dentro del do while");
    break; // Nos salimos del do while antes de verificar la condicion
} while ( condicion );

console.log("Estamos fuera del do while");

// ============================
while( condicion ){
    console.log( "Estamos dentro del while");
    break; // Nos salimos del While sin verificar de nuevo la condicion
}
    
console.log(condicion);


