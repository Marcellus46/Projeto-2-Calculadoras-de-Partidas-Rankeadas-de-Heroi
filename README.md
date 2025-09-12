# Projeto-2-Calculadoras-de-Partidas-Rankeadas-de-Heroi
Continuação do Projeto 1 - Classificador de Nível de Heroi em Javascript. 

Documentação em Markdown 👇

````markdown
# Código em JavaScript: Classificação de Heróis

Este documento explica passo a passo como funciona o código em JavaScript que calcula o **saldo de vitórias** e determina o **nível de um herói**.

---

## 1. Função para calcular o saldo de vitórias

```javascript
function calcularSaldo(vitorias, derrotas) {
  return vitorias - derrotas;
}
````

➡️ **Explicação:**
Esta função recebe como parâmetros o número de vitórias e derrotas de um jogador.
Ela retorna o **saldo**, que é a diferença entre vitórias e derrotas.

---

## 2. Função para determinar o nível do herói

```javascript
function determinarNivel(vitorias) {
  if (vitorias <= 10) return "Ferro";
  if (vitorias <= 20) return "Bronze";
  if (vitorias <= 50) return "Prata";
  if (vitorias <= 80) return "Ouro";
  if (vitorias <= 90) return "Diamante";
  if (vitorias <= 100) return "Lendário";
  if (vitorias <= 150) return "Imortal";
}
```

➡️ **Explicação:**
Com base no número de vitórias, o jogador é classificado em um **nível** específico:

* **0 a 10 vitórias** → Ferro
* **11 a 20 vitórias** → Bronze
* **21 a 50 vitórias** → Prata
* **51 a 80 vitórias** → Ouro
* **81 a 90 vitórias** → Diamante
* **91 a 100 vitórias** → Lendário
* **101 a 150 vitórias** → Imortal

---

## 3. Função principal que exibe o resultado

```javascript
function exibirResultado(vitorias, derrotas) {
  let saldo = calcularSaldo(vitorias, derrotas);
  let nivel = determinarNivel(vitorias);
  console.log(`O Heroi tem de saldo de ${saldo} vitorias esta no nivel de ${nivel}`);
}
```

➡️ **Explicação:**
Essa função junta as anteriores para exibir a mensagem final no console:
`O Heroi tem de saldo de X vitorias esta no nivel de Y`

---

## 4. Exemplo com vários jogadores (laço de repetição)

```javascript
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
```

➡️ **Explicação:**

* Criamos um **array de objetos** chamado `jogadores`, cada objeto representando vitórias e derrotas de um herói.
* O **laço `for`** percorre cada jogador e chama a função `exibirResultado`, mostrando no console o saldo e o nível correspondente.

---

## 5. Saída esperada

Ao executar o código, teremos algo assim no console:

```
O Heroi tem de saldo de 3 vitorias esta no nivel de Ferro
O Heroi tem de saldo de 10 vitorias esta no nivel de Bronze
O Heroi tem de saldo de 25 vitorias esta no nivel de Prata
O Heroi tem de saldo de 40 vitorias esta no nivel de Ouro
O Heroi tem de saldo de 45 vitorias esta no nivel de Diamante
O Heroi tem de saldo de 45 vitorias esta no nivel de Lendário
O Heroi tem de saldo de 90 vitorias esta no nivel de Imortal
```

---

```

Quer que eu já transforme esse **Markdown em PDF** formatado bonitinho para você também?
```
