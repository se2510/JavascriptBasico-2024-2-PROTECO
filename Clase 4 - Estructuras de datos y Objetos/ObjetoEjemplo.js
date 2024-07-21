
let vehiculo={
    marca: "BMW",
    cantLLantas: 4,
    anio : 2016,
    color: 'rojo',
    saludar: function(){
        return "sonido"
    }
}


for (let atributo in vehiculo ){
    console.log(vehiculo[atributo])
}


for (let atributo in vehiculo ){
    console.log(atributo)
}

