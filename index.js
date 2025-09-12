
function calcularSaldo(vitorias, derrotas) {
  return vitorias - derrotas;
}
function determinarNivel(vitorias) {
  if (vitorias <= 10) return "Ferro";
  if (vitorias <= 20) return "Bronze";
  if (vitorias <= 50) return "Prata";
  if (vitorias <= 80) return "Ouro";
  if (vitorias <= 90) return "Diamante";
  if (vitorias <= 100) return "Lendário";
  if (vitorias <= 150) return "Imortal";
}
function exibirResultado(vitorias, derrotas) {
  let saldo = calcularSaldo(vitorias, derrotas);
  let nivel = determinarNivel(vitorias);
  console.log(`O Heroi tem de saldo de ${saldo} vitorias esta no nivel de ${nivel}`);
}
let jogadores = [
  { vitorias: 5, derrotas: 2 },
  { vitorias: 15, derrotas: 5 },
  { vitorias: 45, derrotas: 20 },
  { vitorias: 70, derrotas: 30 },
  { vitorias: 85, derrotas: 40 },
  { vitorias: 95, derrotas: 50 },
  { vitorias: 120, derrotas: 30 },
]
for (let i = 0; i < jogadores.length; i++) {
  let jogador = jogadores[i];
  exibirResultado(jogador.vitorias, jogador.derrotas);
}
