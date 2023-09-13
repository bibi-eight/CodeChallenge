//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const saldoAtual = parseFloat(gets());
const valorDeposito = parseFloat(gets());
const valorRetirada = parseFloat(gets());

//TODO: Calcular o saldo atualizado de acordo com a descrição deste desafio.

let saldoFinal = saldoAtual + valorDeposito - valorRetirada;

//TODO: Imprimir o a saída de conforme a tabela de exemplos (uma casa decimal).

console.log("Saldo atualizado na conta: " + saldoFinal.toFixed(1));

//O toFixed()método arredonda a string para um número especificado de casas decimais.