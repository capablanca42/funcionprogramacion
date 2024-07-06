/*
fecha:
autor:
tema: primeros paso con programacion funcional
*/
const edades = [17,22,15,18,20,21,16,25];


//imprime los elementos del array
console.log("Imprimiendo el array", edades);

function ImprimeArray(edades){  
    for (let i=0; i < edadeslength; i ++);{
        console.log(edades[i]);
    }
}

console.log("Imprimiendo Array", edades);
ImprimeArray(edades);

//imprime edades multiplicadas por 10
console.log("Edades multiplicadas por 10");
edades.forEach((edad) =>{
    console.log(edad*10);
});
//Diseñe la funcion aanónima que imprima un array
const Impvector = ((vector)=>{
 vector.forEach(item=>)
 console.log(`imprimiendo elemento ${item}`);

} );
const temperaturas=[23,25.6,30,28.9,22.55];
const nombres =['Juan','Ana', 'Pedro','maria', 'andres', 'martha', 'luis'];
Impvector(temperatura);
Impvector(nombres);
Impvector(edades);

const mensajes= [
    'Hola', //0
    'hasta pronto',//1
    'buenos dias',// 3
    'buen fin de semanas',//4
    'bienvenidos',
    function Saludos(){// 5
    console.log('lafuncion esta dentro del array!!!');        
    },
    function Hola(nombre){
        //con los elementos 5 primeros elememtos salude a la persona, 
        //y luego sdespidase
        //buenos dias NOMBRE-PERSONA,te deseo buen fin de semana. Hasta pronto!!
       
        console.log("mensaje" + this [0]);
        console.log(`${this[2]} ${nombre}, te deseo{vector [3]} ${vectror[1]}`);
        //Diseñe la funcion que imprima, usando un bucle , los 5 primero elementos del vector
        (vector)=> {
            for (let i= 0; i< 5; i++) {
                console.log(vector [i]);
            }
        }
    },
    {}
    //Diseñe la funcion que imprima, usando un bucle, los 5 primeros
    //elementos de vector

];
console.log("imprimiendo los elementos del array de mensajes");
console.log(mens [0]);