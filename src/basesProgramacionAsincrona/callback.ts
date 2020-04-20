import { Persona } from "./../temas-base/interfaces";
/******************Callback********************
Son funciones que se pasan como parametros
**************************************/

const arreglo4: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arreglo4.forEach(function (elemento) {
  console.log(elemento);
});

/**************************************
Explicacion basica de callback
**************************************/
function PrimerFuncion(callback: Function) {
  alert("Primero ejecuto Main y despues segunda funcion");
  callback();
}

function SegundaFuncion() {
  alert("Hola, se ejecuto la segunda funcion");
}

/**************************************
2do ejercicio Callback
**************************************/
function UserName(saludarUserName: Function) {
  let name = prompt("Ingrese su nombre");
  saludarUserName(name);
}

function SaludarUserName(nombre: string) {
  alert(`Hola ${nombre}`);
}

//UserName(SaludarUserName);

/**************************************
Tercer Ejercicio
**************************************/

function Suma(a: number, b: number, Callback: Function) {
  let resultado = a + b;
  Callback(resultado);
}

function MostrarResultado(resultado: number) {
  resultado > 10 ? alert("Pasaste la materia") : alert("Reprobaste");
}

//Suma(6, 5, MostrarResultado);

/**************************************
Uso intermedio Callbacks
**************************************/
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

function EliminarUsuario(nombre: string, callback: Function) {
  let longitudInicial = Personas.length;
  Personas = Personas.filter(
    (persona) => persona.nombre.toLowerCase() != nombre
  );
  if (longitudInicial == Personas.length) {
    callback(true, nombre);
  } else {
    callback(null, nombre);
  }
}

function MostrarUsuarios(error: string | null, respuesta: boolean) {
  if (error) {
    console.error(
      `El usuario con nombre: ${respuesta} no existe en la base de datos`
    );
    return;
  }

  const tbody = document.querySelector("#tbody");
  Personas.forEach((persona) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
            <td>${persona.id}</td>
            <td>${persona.nombre}</td>
            <td>${persona.edad}</td>
            <td>${persona.sexo}</td>
        `;
    tbody?.appendChild(tr);
  });
}

//EliminarUsuario('ricardo', MostrarUsuarios);

let getEmpleado = (id: number, callback: Function) => {
  let empleadoDB = Personas.find((persona) => persona.id === id);
  if(!empleadoDB){
      callback(`No existe un empleado con el id ${id}`);
  }else{
      callback(null, empleadoDB);
  }
};

let getSalario = (empleado: Persona, callback: Function) => {
  let salarioDB = Salario.find((salario) => salario.id === empleado.id);
  if(!salarioDB){
      callback(`El empleado ${empleado.nombre} no tiene salario asignado`);
  }else{
      callback(null, {
          nombre: empleado.nombre, 
          salario: salarioDB.salario
      });
  }
};

getEmpleado(4, (err: string | null, empleado: Persona) => {
  if (err) {
      return console.error(err);
  }

  getSalario(empleado, (err: null | string, res: any)=>{
    if(err){
        return console.error(err);
    }
    console.info(`El salario de ${res.nombre} es de $${res.salario}`);
  })
});
