let nombre: string = "Cristian";
let edad: number = 24;
let estudiante: boolean = false;
let array1: Array<string | number> = [1,2,3,'a','b','c'];

function Numerica(x: number, y: number):number { //Para indicar que se puede retornar dos distintos tipos de datos es con number | null
    let resultado = x + y;
    return resultado;
}

const btnEjecutar: HTMLElement = document.getElementById('BtnEjecutar')!;
btnEjecutar.addEventListener('click', CalcularEdadCasarse);

function CalcularEdadCasarse(){
    const inputEdadUsuario: HTMLInputElement = (<HTMLInputElement>document.getElementById('edadUsuario'));
    const edadUsuario:number = Number(inputEdadUsuario.value);

    let resultado: number = edadUsuario + 20;

    const output: HTMLDivElement = (<HTMLDivElement>document.querySelector('#output'));
    output.innerText = `Te vas a casar a los ${resultado}`;

}
