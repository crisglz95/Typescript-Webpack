import {
  Alumnos,
  Carrera,
  CentroEstudios,
} from "./../Practica-Callbacks/interfaces";

/********Problemas**********
 1.-Aplicar Interfaces a cada Arreglo

 2.- Nombre de la carrera en la cual estudia el alumno con id 2

 3.- Nombre del centro a la cual pertenece la carrera Nutricion

 4.- Nombre del centro al cual pertenece la carrera del alumno Victor Lemus.


 Nota: cree las funciones necesarias, implementado callbacks como en el ejemplo del salario.
        Aunque en los problemas maneje un  dato objetivo, tiene que tener validación para
        los casos en el que el dato no exista

******************/

const Alumnos: Array<Alumnos> = [
  {
    id: 1,
    Nombre: "Alicia Villareal",
    idCarrera: 3,
  },
  {
    id: 2,
    Nombre: "Blanca Díaz",
    idCarrera: 2,
  },
  {
    id: 3,
    Nombre: "Daniel Palacios",
    idCarrera: 4,
  },
  {
    id: 4,
    Nombre: "Victor Lemus",
    idCarrera: 1,
  },
  {
    id: 5,
    Nombre: "Karen Sanchez",
    idCarrera: 5,
  },
];

const Carrera: Array<Carrera> = [
  {
    idCarrera: 1,
    carrera: "Mercadotecnia",
    idCentroEstudios: 1,
  },
  {
    idCarrera: 2,
    carrera: "Historia",
    idCentroEstudios: 3,
  },
  {
    idCarrera: 3,
    carrera: "Nutricion",
    idCentroEstudios: 2,
  },
  {
    idCarrera: 4,
    carrera: "Tics",
    idCentroEstudios: 1,
  },
];

const CentroEstudios: Array<CentroEstudios> = [
  {
    id: 1,
    Nombre: "Ciencias y tecnologias",
  },
  {
    id: 2,
    Nombre: "Salud",
  },
];

let getAlumno = (id: number, callback: Function) => {
	let alumnoDB = Alumnos.find((alumno) => alumno.id === id);
	if(!alumnoDB){
		callback(`No existe el alumno con id ${id}`);
	}else{
		callback(null, alumnoDB);
	}
};

let getCarrera = (alumno: Alumnos, callback: Function) => {
	let carreraDB = Carrera.find((carrera) => carrera.idCarrera === alumno.idCarrera);
	if(!carreraDB){
		callback(`El alumno ${alumno.Nombre} no tiene carrera asignada`);
	}else{
		callback(null, {
      idCentroEstudios: carreraDB.idCentroEstudios,
			nombre: alumno.Nombre, 
			carrera: carreraDB.carrera
		});
	}
}

let getCentroEstudios = (carrera: Carrera, callback: Function) => {
  let centroDB = CentroEstudios.find((centro) => centro.id === carrera.idCentroEstudios);
	if(!centroDB){
		callback(`La carrera ${carrera.carrera} no tiene centro de estudios asignado`);
	}else{
		callback(null, {
			carrera: carrera.carrera,
			centro: centroDB.Nombre
		})
	}
}


getAlumno(2, (err: string | null, alumno: Alumnos) => {
	if(err){
		return console.error(err);
	}
	getCarrera(alumno, (err: null | string, res: any) => {
		if(err){
			return console.error(err);
		}
		console.info(`La carrera del Alumno ${res.nombre} es ${res.carrera}`);
	});

});

getAlumno(1, (err: string | null, alumno: Alumnos) => {
  if(err){
    return console.error(err);
  }
  getCarrera(alumno, (err: null | string, carrera: Carrera) => {
    if(err){
      return console.error(err);
    }
    getCentroEstudios(carrera, (err: string | null, res: any) => {
      if(err){
        return console.error(err);
      }
      console.info(`La carrera ${carrera.carrera} pertenece al centro de estudios de ${res.centro}`);
    });
  });
});

getAlumno(4, (err: string | null, alumno: Alumnos) => {
  if(err){
    return console.error(err);
  }
  getCarrera(alumno, (err: null | string, carrera: Carrera) => {
    if(err){
      return console.error(err);
    }
    getCentroEstudios(carrera, (err: string | null, res: any) => {
      if(err){
        return console.error(err);
      }
      console.info(`El alumno ${alumno.Nombre} de la carrera ${carrera.carrera} pertenece al centro de estudios de ${res.centro}`);
    });
  });
});