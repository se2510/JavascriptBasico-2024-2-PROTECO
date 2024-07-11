// Switch case: Alternativa a ifs anidados que nos ayudará a hacer codigo más limpio.
let opcion = 1;

switch ( opcion ){
    case 1:
        console.log("la opcion es 1");
        break;
    case 2: 
        console.log("La opcion es 2");
        break;
    case 3:
        console.log("Estamos en la opcion 3");
        break;
}

let agua = "Jamaica";

switch (agua){
    case "Horchata":
        console.log("Escogiste el agua de horchata");
        break; // Para que no se siga a las siguientes opciones 
    case "Jamaica":
        console.log("Escogiste el agua de jamaica");
        break;
    case "Coco":
        console.log("Escogiste el agua de coco");
        break;
    default:
        console.log("Escoge bien el agua, plox");
        break; // No es necesario porque es la ultima opcion
}

// ================ EJEMPLO MENU ================

switch ( opcion ){
    case 1:
        console.log("1. Ver el score");
        break;
    case 2: 
        console.log("2. Jugar");
        break;
    case 3:
        console.log("3. Salir");
        break;
}


// =================== Ejemplo con un ciclo/bucle
let menu = true;

while ( menu ){
    switch (agua){
        case "Horchata":
            console.log("Escogiste el agua de horchata");
            menu = false;
            break; // Para que no se siga a las siguientes opciones 
        case "Jamaica":
            console.log("Escogiste el agua de jamaica");
            menu = false;
            break;
        case "Coco":
            console.log("Escogiste el agua de coco");
            menu = false;
            break;
        default:
            console.log("Escoge bien el agua, plox");
            break; // No es necesario porque es la ultima opcion
    }
}

