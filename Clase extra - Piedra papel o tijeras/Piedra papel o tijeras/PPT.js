
// Obteniendo las elecciones
let eleccionPCDisplay = document.getElementById("elec-compu");
let eleccionJugadorDisplay = document.getElementById("elec-usuario");
let resultadoDisplay = document.getElementById("resultado");
// let ejemplo1 = document.getElementsByClassName()
// let ejemplo2 = document.getElementsByTagName()
let eleccionJugador;
let eleccionPC;
let resultado;
let nombreBoton = "button";

const posiblesOpciones = document.querySelectorAll(nombreBoton);
console.log(posiblesOpciones);

// // Cuando se hace click en alguna opción, deseamos que algo pase (el EventListener)
// posiblesOpciones.forEach(opcion => opcion.addEventListener('click',(e)=>{
//     eleccionJugador = e.target.id; // Se guarda el id en la variable eleccionJugador
//     console.log(eleccionJugador);
//     eleccionJugadorDisplay.innerText = eleccionJugador;
//     // hacer eleccion de la PC
//     generarOpcionPC();
//     // calcular los resultados
//     calcularResultado();
// }));


for( let i = 0; i< posiblesOpciones.length; i++){
    posiblesOpciones[i].addEventListener('click',(evento)=>{
            console.log(evento);
            eleccionJugador = evento.target.id; // Se guarda el id en la variable eleccionJugador
            console.log(eleccionJugador);
            eleccionJugadorDisplay.innerText = eleccionJugador;
            // hacer eleccion de la PC
            generarOpcionPC();
            // calcular los resultados
            calcularResultado();
        })
}

// for( let i = 0; i< posiblesOpciones.length; i++){
//     posiblesOpciones[i].addEventListener('click', jugar(e))
// }

// function jugar(e){
//     console.log(e);
//     eleccionJugador = e.target.id; // Se guarda el id en la variable eleccionJugador
//     console.log(eleccionJugador);
//     eleccionJugadorDisplay.innerText = eleccionJugador;
//     // hacer eleccion de la PC
//     generarOpcionPC();
//     // calcular los resultados
//     calcularResultado();
// }

function generarOpcionPC(){
    //const numAleatorio = Math.random()
    const numAleatorio = Math.floor(Math.random()*3)+1;
    // console.log(numAleatorio);
    // console.log(numAleatorio*3);
    // console.log(Math.floor(numAleatorio*3));
    // console.log(Math.floor(numAleatorio*3)+1);

    if( numAleatorio === 1){
        eleccionPC = "roca";
    }
    if( numAleatorio === 2){
        eleccionPC = "papel";
    }
    if( numAleatorio === 3){
        eleccionPC = "tijeras";
    }
    eleccionPCDisplay.innerText = eleccionPC;
}

function calcularResultado(){
    if(eleccionJugador=="roca"){
        if(eleccionPC==1){
            resultadoDisplay.innerText="Empate";
        }else if(eleccionPC==3){
            resultadoDisplay.innerText="El jugador gana";
        }else {
            resultadoDisplay.innerText="La computadora gana";
        }
    }else if(eleccionJugador=="papel"){
        if(eleccionPC==1){
            resultadoDisplay.innerText="El jugador gana";
        }else if(eleccionPC==2){
            resultadoDisplay.innerText="Empate";
        }else {
            resultadoDisplay.innerText="La computadora gana";
        }
    }else if(eleccionJugador=="tijeras"){
        if(eleccionPC==1){
            resultadoDisplay.innerText="El jugador pierde";
        }else if(eleccionPC==2){
            resultadoDisplay.innerText="El jugador gana";
        }else {
            resultadoDisplay.innerText="Empate";
        }
    }
}

// if( eleccionPC === "roca" && eleccionJugador === "papel"){
//     resultado = "Ganaste! :D";
// }
// if( eleccionPC === "roca" && eleccionJugador === "tijeras"){
//     resultado = "Perdiste! :C";
// }
// if( eleccionPC === "papel" && eleccionJugador === "tijeras"){
//     resultado = "Ganaste! :D";
// }
// //...
// resultadoDisplay.innerText= resultado;


