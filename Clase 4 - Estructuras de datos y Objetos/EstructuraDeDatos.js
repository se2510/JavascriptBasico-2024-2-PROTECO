let arreglo = [15,7,3,4,8]

console.log(arreglo[4])

for(let i= 0; i<=4; i++){
console.log(arreglo[i])
}

let hola = ['h','o','l','a']

console.log(hola.length)


arreglo.forEach(function(numero){
    console.log(numero)
})
//se agrega al final
arreglo.push(6,7,8)
console.log(arreglo)
//se elimina al final
arreglo.pop(); arreglo.pop(); arreglo.pop()
console.log(arreglo)

arreglo.unshift(-1,0,'1','dsgsdgs','2')
console.log(arreglo)

arreglo.shift()
let num =arreglo.shift()
console.log(num)
console.log(arreglo)

arreglo.reverse()
console.log(arreglo)
//           0, 1, 2, 3, 4,  5,     6 ,      7  
//Array(8) [ 8, 4, 3, 7, 15, '2', 'dsgsdgs', '1' ]
//slice(indiceInicio,indiceFinal+1)

let subArray = arreglo.slice( 1 , 6 )
console.log(subArray)



arreglo.splice(2,0,1)
console.log(arreglo)
//indicador
//Array(9) [ 8, 4, 1, 3,'uno','dos','tres', 'dsgsdgs', '1' ]
//arreglo.splice(pocionDelIndicador, ElimiarconIndi, elemento1, elemento2, ...)
arreglo.splice(4,3,'uno','dos','tres')
console.log(arreglo)
//               0, 1, 2,3,4,5,6,7,8,9,10,11
let arreglo1 = [ 5, 1, 3,1,1,1,1,1,1,1,12,13]
let primerIndice = arreglo1.indexOf(1)
console.log(primerIndice)

let ultimoIndice = arreglo1.lastIndexOf(1)
console.log(ultimoIndice)

//concatenar
let arreglo2 = [ 5, 1] 
let arreglo3 = [ 4, 3]
 let todos = arreglo3.concat( arreglo3 )
 console.log(todos)








