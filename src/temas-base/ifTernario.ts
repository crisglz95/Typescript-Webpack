const NumeroRandom = Math.floor(Math.random() * 10);

// if(NumeroRandom >= 6){
//     alert(`Pasaste con calificacion de ${NumeroRandom}`);
// }else{
//     alert(`NO Pasaste con calificacion de ${NumeroRandom}`);
// }

//El if ternario siempre necesita el true y el false de la condicion
/**
 * Ternario Basico
 */
// NumeroRandom >= 6
//   ? alert(`Pasaste con calificacion de ${NumeroRandom}`)
//   : alert(`NO Pasaste con calificacion de ${NumeroRandom}`);

/**
 *
 */

let numero = 5;
let numeroObtenido = numero == 5 ? "Cinco" : 
                     numero == 7 ? "Siete" : 
                     numero == 11 ? "Once" : 
                     null;
console.log(numeroObtenido);

/**
 * ==    ===
 * !=    !==
 * >=    >==
 * <=    <==
 */

let x: number = 7;
let y: number = 7;

x === y ? 
alert('los valores con operador restrictivo son igualessssssssssssssss') : 
alert('los valores con operador restrictivo no son iguales');
