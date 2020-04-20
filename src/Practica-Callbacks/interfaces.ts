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

export {
    Alumnos, 
    Carrera,
    CentroEstudios
}