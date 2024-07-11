
{
    let varLocal = "Hola";
    console.log(varLocal);
}
//console.log(varLocal)


let varGlobal = "Soy una variable global";
console.log(varGlobal);

function prueba(){
    let varLocal = "Soy una varible";
    console.log(varGlobal);
    console.log(varLocal);
}
//console.log(varLocal)

prueba();

// Cierre closures
function exterior( ){
    let varExterna = "Externa";
    function interior( ){
        console.log(varExterna);
    }
    interior( );
    
}
exterior( );


function crearContador(){
    let contador = 0;

    return function(){
        // for( let i = 0 ; i < 10 ; i++){
        //     contador++;
        // }
        contador++;
        return contador;
    };
}

const contar = crearContador();
console.log(contar());
console.log(contar());
console.log(contar());
console.log(contar());





