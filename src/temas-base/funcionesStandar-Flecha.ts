/*****************Caracteristicas de los parametros de las funciones*********************

Explicaremos las caracteristicas que tienen los parametros de las funciones

* Parametros obligatorios
* Parametros opcionales
* Parametros por default

Notas
    1. El primer parametro no puede ser opcional 
    2. Siempre los parametros opcionales deben escribirse al final 

**************************************/

// function Suma(x: number, z: number = 10, y?:boolean) {
//     let suma = x + z;
//     if(y == undefined)
//     console.log(suma);
// }

// Suma(10, 20);

/******************Funcion de flechas**************************/

function ImpresionDatos() {
  console.log("Hola mundo! desde una funcion Standar");
}

const arrowFunctionSaludos = (x: number, y: number) => x + y;

//ImpresionDatos();
//console.log(arrowFunctionSaludos(10, 20));

/******************Metodos array funcion de flecha********************
1. forEach: Recorre un arreglo y a cada valor le aplica una accion 
2. Map: Es similar al foreach ya que cada valor en el arreglo le aplica una accion, la diferencia es que el MAp nos crea un arreglo nuevo y el foreach no
3. Find: Encuentra un valor dentro de un arreglo y solo regresa un valor nuevo
4. Filter: Encuentra todos los elementos con la caracteristica que le enviemos
5. Some: Encuentra un valor dentro de un arreglo y nos indica un true o un false. True = existe el valor / False = no existe el valor
**************************************/

let arregloNumerico: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arregloNuevo: any = [];
let personas: Array<any> = [
  {
    id: 1,
    nombre: "Jose Carlos",
    sexo: "Masculino",
  },
  {
    id: 2,
    nombre: "Chinese",
    sexo: "Masculino",
  },
  {
    id: 3,
    nombre: "Daniela",
    sexo: "Femenino",
  },
];

//arregloNumerico.forEach((elemento) => console.log('x', elemento));
arregloNumerico.forEach((elemento) => {
  return elemento % 2 == 0 ? "par" : "impar";
});

/******************Map********************

**************************************/

arregloNuevo = arregloNumerico.map((elemento) =>
  elemento % 2 == 0 ? "par" : "impar"
);

//console.log(arregloNuevo);

/******************find************************/
let persona = personas.find((elemento) => elemento.id == 2);
//console.log(persona);

/******************Filter*********************/
let personasMasculinas = personas.filter(
  (elemento) => elemento.sexo == "Masculino"
);
//console.log(personasMasculinas);


/******************Some*************************/
let existe = personas.some((persona) => persona.id == 2 && persona.nombre == 'Chinese');
console.log(existe);