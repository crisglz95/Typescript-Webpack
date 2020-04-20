import {Persona} from './interfaces';
/******************Spread Array********************

**************************************/
const arreglo1 = [1, 2, 3, 4, 5, 6, 7];
const arreglo2 = [8, 9, 10];
const arreglo3 = [...arreglo1, ...arreglo2];
//El spreadOperator son tres puntos (...)
//console.log(arreglo3);

/******************Spread Objects********************

**************************************/
const objetoPersona1:any = {
    nombre: 'Jose Carlos', 
    apellido: 'Gonzalez Soriano', 
    edad: 23, 
    sexo: 'Masculino'
};

const objetoPersona2: any = {...objetoPersona1, estatura: 1.60};

//console.log(objetoPersona2);

function SumarValores(x?: number, y?: number, z?: number){
    let suma = x! + y! + z!;
    console.log(suma);

}

SumarValores(...arreglo2)