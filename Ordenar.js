/*
fecha:
autor:
tema: ordenar vector
*/
const edades =[20,10,16,,8,5,100,15,1,43,77];
function OrdenarVector()
{
for( let i=0; i < edades.length; i++)
 {
    for(let j = i+1; j <edades.length; j++)
{
        {
        let aux = edades [i];
        edades [j] = edades[j];
        edades [j]= aux;
    }
}

}  

}
OrdenarVector(edades);
console.log(edades2);

let edades2=[20,10,16,8,5,100,15,1,43,77];
//use el metodo sort para ordenar el vector
edades2.sort(function(a,b){return a-b});
edades2.sort((a,b)=>a-b);
console.log(edades2);

