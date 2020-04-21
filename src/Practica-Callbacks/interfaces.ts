interface Alumnos{
    id: number, 
    Nombre: string,
    idCarrera: number
}

interface Carrera{
    idCarrera: number, 
    carrera: string,
    idCentroEstudios: number
}

interface CentroEstudios{
    id: number, 
    Nombre: string
}

interface resCarrera{
    idCentroEstudios: number | undefined;
    nombre: string; 
    carrera: string | undefined;
}

export {
    Alumnos, 
    Carrera,
    CentroEstudios, 
    resCarrera
}