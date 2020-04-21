import {
  Alumnos,
  Carrera,
  CentroEstudios,
  resCarrera,
} from "./../Practica-Callbacks/interfaces";

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

const getAlumno = async(id: number) => {
    const Alumno = Alumnos.find((alumno) => alumno.id === id);
    if(!Alumno){
        throw new Error(`El alumno con id ${id}, no existe en la base de datos`);
    }else{
        return Alumno;
    }
}

const getCarrera = async(alumno: Alumnos) =>{
    const CarreraDB = Carrera.find((carrera) => carrera.idCarrera === alumno.idCarrera);
    if(!CarreraDB){
        throw new Error(`El alumno ${alumno.Nombre} no tiene carrera asignada`);
    }else{
        return {
            idCentroEstudios: CarreraDB.idCentroEstudios,
            nombre: alumno.Nombre,
            carrera: CarreraDB.carrera
        }
    }
}

const getCentroEstudios = async(carrera: resCarrera) =>{
    const centroDB = CentroEstudios.find((centro) => centro.id === carrera.idCentroEstudios);
    if(!centroDB){
        throw new Error(`La carrera ${carrera.carrera} no tiene centro de estudios asignado`);
    }else{
        return {
            carrera: carrera.carrera,
            centro: centroDB.Nombre,
            alumno: carrera.nombre
        }
    }
}

const getResult1 = async (id: number) =>{
    const Alumno = await getAlumno(id);
    const Carrera = await getCarrera(Alumno);

    return `El alumno ${Carrera.nombre} esta en la carrera ${Carrera.carrera}`;
}

const getResult2 = async (id: number) => {
    const Alumno = await getAlumno(id);
    const Carrera = await getCarrera(Alumno);
    const Centro = await getCentroEstudios(Carrera);

    return Centro;
};

getResult1(2)
.then((res) => console.log(res))
.catch((err: Error) => console.log(err.message));

getResult2(1)
.then((res) => console.log(`La carrera ${res.carrera} pertenece al centro de estudios ${res.centro}`))
.catch((err: Error) => console.log(err.message));

getResult2(4)
.then((res) => console.log(`El alumno ${res.alumno} de la carrera ${res.carrera} pertenece al centro de estudios ${res.centro}`))
.catch((err: Error) => console.log(err.message));