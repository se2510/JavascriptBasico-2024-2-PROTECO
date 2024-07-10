let condicion=true
if(!condicion){
console.log('Es verdadero');
}else if(!condicion){
console.log('es falso')
}else {
console.log('si, es falso')
}

//invierno  ---> 1,2,12
//primavera ---> 3,4,5
//verano    ---> 6,7,8
//otoño     ---> 9,10,11

let mes=15

if(mes==1 || mes==2 || mes==12) {
    console.log('es invierno')
} else if(mes==3 || mes==4 || mes==5){
    console.log('es primavera')
} else if(mes==6 || mes==7 || mes==8){
    console.log('es verano')
}else  if(mes==9 || mes==10 || mes==11){
    console.log('es otoño')
}else{
console.log('el mes no existe')
}
//comprobar que un numero dado que es impar sea  multiplo de 3
let numero=6
if(numero%2 == 0){
    console.log('par')
}else if  (numero%3 == 0){
    console.log('multiplo de 3')
}
//decir si un numero es par o impar

let num=3
if(num%2!==0){
console.log('par')
}else{
    console.log('impar')
}
//determinar si un numero es multiplo de 7

let number=10
if(number%7 == 0){
	console.log('multiplo de 7')
}else{
	console.log('no es multiplo de 7')
}

//operador ternario:
number%7 == 0 ? console.log('multiplo de 7') : console.log('no es multiplo de 7')
//___________________________________________
if(num%2!==0){
console.log('par')
}else{
    console.log('impar')
}
//utilizando el operador ternario, determinar si un numero es par o impar
let numbero=3
numbero%2 == 0 ? console.log('par') : console.log('impar')
//document.write('hola mundo');