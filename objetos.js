const Estudiante = {
    "apellidos": "Ponce preciado",
    "nombres": "Pedro pablo",
    "carrera":"Dsarrollo de software",
    "matriculado": true,
    "edad" :18,
    "pesoEnKg": 72.67,
    Mayoredad(){
    if(this.edad > 18)
        console.log(`${this.nombres} eres mayor de edad`);
    else
        console.log(`${this.nombres} eres menor de edad`);
    },
    Tienesobre(peso)
    {
        if(peso>=80)
            console.log("Tienes sobrepeso.Debes hacer ejercicios");
        else
        console.log("peso normal");


    }
};
console.log("Datos del estudiante", Estudiante);
console.log(`El nombre del estudiante es ${Estudiante.nombres} ${Estudiante.apellidos}`);
Estudiante.Mayoredad();
Estudiante.Tienesobre(Estudiante.peso);


