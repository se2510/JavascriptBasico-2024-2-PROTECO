/* Clase 5: Manipulación del DOM

Para agarrar elementos por etiquieta: document.getElementsByTagName('h1');

Para obtener elementos por Clase: 



Datos curiosos:
let camelCase; // Camel case
let snake_case; // Snake case
*/

let elementoPorTag = document.getElementsByTagName('h1');
console.log(elementoPorTag);
elementoPorTag[0].innerText = "Hemos cambiado el texto";
elementoPorTag[2].innerText = "Soy el indice 2, elemento 3";


// Obteniendo elementos por clase
let elementoPorClase = document.getElementsByClassName('claseEncabezado');
elementoPorClase[0].innerHTML = "He obtenido este elemento por su clase :D";

// Obteniendo elemento por ID
let elementoPorID = document.getElementById('identificador');
console.log(elementoPorID);
elementoPorID.innerText = "Yo soy cool porque tengo un ID";


// =================== EVENTOS ====================

let ejemplo1 = document.getElementById('ejemplo1');

ejemplo1.addEventListener("click", function(){
    // El addEventListener sirve para registrar una accion.
    if(ejemplo1.style.backgroundColor=="cyan"){
        ejemplo1.style.backgroundColor="green";
        ejemplo1.style.border="solid 2px red";
    }else{
        ejemplo1.style.backgroundColor="cyan";
        ejemplo1.style.border="solid 2px blue";
    }
    
    console.log("Has hecho click :D!");
});


// ------------ Evento keydown ------------------

// let eventoKeydown = document.getElementsByClassName('ejemplo2');
// console.log(eventoKeydown[0]); //

// eventoKeydown[0].addEventListener("keydown", logKey);


// function logKey(tecla){
//     if( tecla.code == "KeyA" || tecla.code == "KeyB" ){
//         eventoKeydown[0].style.backgroundColor="blue";
//         eventoKeydown[0].innerText = "Se ha cambiado el elemento";
//     }else{
//         console.log("No se oprimió ninguna tecla válida");
//     }
//     console.log("Has apretado una tecla :)");
// }

let eventoKeydown = document.getElementById('correccion');
console.log(eventoKeydown); //

eventoKeydown.addEventListener("keyup", logKey);

function logKey(tecla){
    if( tecla.code == "KeyA" || tecla.code == "KeyB" ){
        eventoKeydown.style.backgroundColor="blue";
        eventoKeydown.innerText = "Se ha cambiado el elemento";
    }else{
        console.log("No se oprimió ninguna tecla válida");
    }
    console.log("Has apretado una tecla :)");
}


// ------------ Evento submit -----------
let loginForm = document.getElementById('loginForm');
console.log(loginForm);
loginForm.addEventListener("submit", function(){
    let nombre = document.getElementById('nombre').value;
    let password = document.getElementById('password').value;
    // codigo post enviando o verificando en la base de datos que todo este bien
    alert("Tu nombre es: "+nombre+" , verdad?");
    alert("Y tu contraseña es: "+password+" :o");
})



