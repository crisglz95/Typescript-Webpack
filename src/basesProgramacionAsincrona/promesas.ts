import { Persona } from '../temas-base/interfaces';

let Personas: Array<Persona> = [
  {
    id: 1,
    nombre: "Jose Carlos",
    edad: 23,
    sexo: "M",
  },
  {
    id: 2,
    nombre: "Manuel Medina",
    edad: 26,
    sexo: "M",
  },
  {
    id: 3,
    nombre: "Alejandra Lopez",
    edad: 19,
    sexo: "F",
  },
  {
    id: 4,
    nombre: "Laura Rubalcava",
    edad: 25,
    sexo: "F",
  },
  {
    id: 5,
    nombre: "Maria Fernanda",
    edad: 23,
    sexo: "F",
  },
];

let Salario: Array<any> = [
  {
    id: 1,
    salario: 5000,
  },
  {
    id: 2,
    salario: 4000,
  },
  {
    id: 3,
    salario: 3000,
  },
  {
    id: 4,
    salario: 4000,
  },
];

interface resolveFinal {
  nombre: string;
  salario: number;
}

const getEmpleado = (id: number): Promise<Persona> => {
    return new Promise((resolve, reject) => {
        const Empleado = Personas.find((persona) => persona.id == id);
        if(!Empleado){
            reject(`El usuario con id ${id} no se ha encontrado`);
        }
        resolve(Empleado);
    });
};

const getSalario = (empleado: Persona): Promise<resolveFinal> =>{
  return new Promise((resolve, reject) =>{
    const salarioEmpleado = Salario.find((salario) => salario.id === empleado.id);
    if(!salarioEmpleado){
      reject(`El empleado ${empleado.nombre} no tiene salario asignado`);
    }
    resolve({
      nombre: empleado.nombre, 
      salario: salarioEmpleado.salario
    });
  })
}

getEmpleado(4)
.then((mensaje: Persona) => {
    console.log(mensaje)
    getSalario(mensaje)
    .then((respuesta) => console.log(`El empleado: ${respuesta.nombre} tiene un salario de $${respuesta.salario}`))
    .catch((error: string) => console.log(error));
})
.catch((error: string) => {
    console.log('Ejecucion del Reject');
    console.error(error);
});