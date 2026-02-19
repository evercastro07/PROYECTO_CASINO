const CARTAS = [
{nombre: "A", valor: "11"}
{nombre: "2", valor: "2"}
{nombre: "3", valor: "3"}
{nombre: "4", valor: "4"}
{nombre: "5", valor: "5"}
{nombre: "6", valor: "6"}
{nombre: "7", valor: "7"}
{nombre: "8", valor: "8"}
{nombre: "9", valor: "9"}
{nombre: "10", valor: "10"}
{nombre: "J", valor: "10"}
{nombre: "Q", valor: "10"}
{nombre: "K", valor: "10"}

]
const PALOS ["♠", "♥", "♦", "♣"]


let baraja = []

function crearBaraja() {
  baraja = [];

  for (let palo of PALOS) {
    for (let carta of CARTAS) {
      baraja.push({
        nombre: carta.nombre,
        palo: palo,
        valor: carta.valor
      });
    }
  }
}
crearBaraja();
console.log(baraja);

