
let person=['juan','Aguilar','25 años']

let persona ={
    //atributos/describirlo
    nombre :'Juan',
    apellido : 'Aguliar',
    edad : '25 años',
    //metodos/acciones
    saludar: function(){
        console.log('hola')
    }
}

let vehiculo={
    //2 atributos
    marca: "BMW",
    cantLLantas: 4,
    anio : 2016,
    color: 'rojo',

    arrancar: function(){
         return "brrrrrm"
    },
    detener: function(){
         return "*Derrapa*"
    },
    avanzar : function(){
        return "*avanza*"
    },
    pitar: function(){
        console.log("*tun*")
    }
}
let sonido =vehiculo.avanzar()

console.log(sonido)

vehiculo.pitar()

console.log(vehiculo.arrancar())

//SuperClase
class  ANIMAL{
    constructor(nombre,edad){
        this.nombre =  nombre//nombre no se va a guardar
        this.edad=  edad
        this.peso=null
        this.uno = 1
        this.dos = 2
        this.suma = this.dos+this.uno
}
    roncar(){
        console.log("*ronca*")
    }
}

let animal = new  ANIMAL('stich',12)
console.log(animal.nombre)
console.log(animal.peso)
console.log(animal.suma)



class jugla{
    constructor(locacion,temperatura){
        this.locacion=locacion
        this.temperatura=temperatura
    }
    llover(){
        return 'llueve '

    }
}


class perro extends ANIMAL{
    //sobrecarga -JAVA si existe
    //sobreEscritura
    constructor(nombre,edad,raza){
        //llamandoAlconstructorDeANIMAL
        super(nombre,edad)

        this.raza=raza
    }
    ladrar(f){
        return f
    }
    roncar(){
        console.log("*asdfasdfasdfasdf*")
    }

}


class mascota extends perro{
    constructor(nombre,edad,raza,dueno) {
        super(nombre,edad,raza)
        this.dueno=dueno
    }

}


let pet = new mascota('2',4,'3124','1324')

console.log(pet.ladrar('sdfa'))


let miPerro = new perro('Luna',3,"Caniche")
miPerro.roncar()
console.log(miPerro.nombre)
console.log(miPerro.raza)
console.log(miPerro.ladrar("hola"))


//Javascript no permite herencia multiple /kotlin

class pajaro extends ANIMAL{
//cantan
    constructor(nombre,edad,especie){
        //llamandoAlconstructorDeANIMAL
        super(nombre,edad)
        this.es=especie

    }
    cantar(){
    return 'pio pio pio'
    }
}


let pajaro1 = new pajaro('ron',2,"azulejo")

console.log(pajaro1.cantar())
console.log(pajaro1.roncar())




let puedeVolar = {
    Volar(){
        return 'volar'
    }
}
let puedeCaminar = {
    caminar(){
        return 'camina'
    }
}
let pato = Object.assign({},puedeVolar,puedeCaminar)
console.log(pato.caminar())
console.log(pato.Volar())
