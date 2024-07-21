class vehiculo {
    constructor(marca,cantLLantas,anio,color){
    this.marca=marca
    this.cantLLantas=cantLLantas
    this.anio=anio
    this.color=color
    }
    arrancar(){
         return "brrrrrm"
    }
    detener(){
         return "*Derrapa*"
    }
    avanzar(){
        return "*avanza*"
    }
    pitar(){
        console.log(`${this.marca}`)
    }
}

let vehiculo_ = 'asdfasdf'
let vehiculo1 = new vehiculo('wv',4,'2016','rojo')
let vehiculo2 = new vehiculo('toyota',4,'2016','rojo')
let vehiculo3 = new vehiculo('bmw',4,'2016','rojo')
let vehiculo4 = new vehiculo('chevrolet',4,'2016','rojo')
let vehiculo5 = new vehiculo('bmw',4,'2016','rojo')

vehiculo2.pitar()
vehiculo4.pitar()
vehiculo1.pitar()
//Solo funciona con objetos
for (let atributo in vehiculo1 ){
    console.log(vehiculo1[atributo])
}
for (let atributo in vehiculo1 ){
    console.log(atributo)
}






