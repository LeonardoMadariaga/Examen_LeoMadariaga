let vendedor1: number[] = [
  32558,
  36165,
  34240,
  39273,
  34360,
  21347,
  20869,
  21493,
  23062,
  31908,
  30369,
  30652
];
let vendedor2: number[] = [
  27520,
  31480,
  24053,
  34823,
  32942,
  38477,
  23756,
  21413,
  26699,
  22045,
  25625,
  26855
];
let vendedor3: number[] = [
  20584,
  33473,
  34300,
  24598,
  33955,
  24040,
  39173,
  25542,
  25105,
  26759,
  29790,
  36218
];
let vendedor4: number[] = [
  27243,
  38774,
  21246,
  30691,
  24542,
  39771,
  31807,
  31641,
  20850,
  29837,
  37182,
  28006
];
let vendedor5: number[] = [
  23334,
  32687,
  25217,
  26844,
  27033,
  35244,
  25702,
  25781,
  35525,
  34874,
  38842,
  20562
];
let longitud: number = 3;
let indice: number = 0;

let meses: string[] = ["Enero", "Febrero", "Marzo"];
let mes: number[] = [1, 2, 3];
let semana: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
function obtenerMaximaVentaSemestral(
  arreglo: number[],
  longitud: number,
  cantidadMeses: string,
  mesUno: string[]
): string {
  let max: number = 0;
  let mesMayor: string = "";
  let texto: string = "";
  let meses: string = "";
  for (indice = 0; indice < longitud; indice++) {
    if (arreglo[indice] > max) {
      max = arreglo[indice];
      mesMayor = mesUno[indice];
      meses = cantidadMeses[indice];
    }
  }

  texto =
    "La mayor venta fue de: " +
    max +
    " y fue en la semana " +
    meses +
    " en el mes de " +
    mesMayor;

  return texto;
}
console.log(obtenerMaximaVentaSemestral(vendedor1, longitud, semana, meses));
console.log(obtenerMaximaVentaSemestral(vendedor2, longitud, semana, meses));
console.log(obtenerMaximaVentaSemestral(vendedor3, longitud, semana, meses));
console.log(obtenerMaximaVentaSemestral(vendedor4, longitud, semana, meses));
console.log(obtenerMaximaVentaSemestral(vendedor5, longitud, semana, meses));
