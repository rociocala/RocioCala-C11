let numeros = [10,20,30,40,50,60,70,80,90,100];

let[cero, ,dos, ,cuatro, , , , , , ] = numeros;
let [,uno, ,tres, ,...otros]=numeros;

console.log("La posicion cero es: "+cero+",la posicion dos es:"+dos+" y la posicion cuatro es:"+cuatro);
console.log("El resto de numeros son: "+uno+","+tres+","+otros);

/*--------------------------------------------------------------------------------------------------------------------*/

const mascota = {
    nombre : 'Tincho',
    tipo:'perro',
    color:'marron',
    raza:'pitbull'
}
 
const{nombre,tipo,color,raza}=mascota
console.log("Hola les presento a mi mascota su nombre es "+nombre+ ",es un hermoso "+tipo+",de color "+color+" y su raza es "+raza);




