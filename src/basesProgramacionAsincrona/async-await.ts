import { Persona, Salario } from '../temas-base/interfaces';

const GetNombre = () => {
  return new Promise<string>((resolve, reject) => {
    if (true) {
      resolve("Cristian Alejandro");
    } else {
      reject(new Error("No hay usuarios"));
    }
  });
};

async function Saludos() {
  let nombreRespuesta: string | undefined = undefined;
  // GetNombre().then((nombre: string) => {
  //     nombreRespuesta = nombre;
  //     console.log('Apenas me resolvi');
  // });
  nombreRespuesta = await GetNombre();
  // Prueba();
  if (nombreRespuesta == undefined) {
    throw new Error(`Nombre del usuario con valor indefinido`);
  }
  return `Hola usuario: ${nombreRespuesta}`;
}

// function Prueba(){
//     let suma = 2 + 2;
//     console.log(suma);
// }

//console.log("Primero");

// Saludos()
//   .then((valor) => {
//     console.log(valor);
//   })
//   .catch((error: Error) => {
//     alert(error.message);
//   });

//console.log("Segundo");

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

let Salario: Array<Salario> = [
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


//Al agregarle el async se convierte en una promesa de tipo persona. 
const getEmpleado = async (id: number) => {
    const Empleado = Personas.find((persona) => persona.id === id);
    if(!Empleado) {
        throw new Error(`El empleado con id ${id}, no existe en la base de datos`);
    }else{
        return Empleado;
    }
}

const getSalario = async (Empleado: Persona) => {
    const SalarioEmpleado = Salario.find((salario) => salario.id === Empleado.id);
    if(!SalarioEmpleado){
        throw new Error(`El empleado con id ${Empleado.id} no tiene salario asignado`);
    }else{
        return {
            nombre: Empleado.nombre,
            salario: SalarioEmpleado.salario
        }
    }
}

const getInformacion = async (id: number) => {
    const Empleado = await getEmpleado(id);
    const response = await getSalario(Empleado);
    return `El empleado ${response.nombre} gana un salario de $${response.salario}`;
}

getInformacion(2)
.then((mensaje) => console.log(mensaje))
.catch((err: Error) => console.log(err.message));