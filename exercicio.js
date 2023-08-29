/* 1. Faça um programa que leia o nome do aluno, três notas e mostre o nome e a média(aritmética) do
aluno.*/
// const readline = require('readline-sync');
// let nome, nota1, nota2, nota3, media;

// nome = readline.question('Qual é o seu nome? ');
// nota1 = +(readline.question('Digite sua primeira nota? ')); //MÉTODO1 para transformar str em numero
// nota2 = parseInt(readline.question('Digite sua segunda nota? ')); //MÉTODO2 para transformar str em numero
// nota3 = readline.questionInt('Digite sua terceira nota? '); //MÉTODO3 para transformar str em numero
// media = (nota1 + nota2 + nota3)/3;

// console.log(`Olá ${nome}! Sua média foi: ${media}`);

/* 2. Faça um programa com Javascript para verificar se um determinado ano, fornecido pelo usuário, é
bissexto. Um ano é bissexto se for divisível por 400 ou se for divisível por 4 e não for divisível por
100.Exemplos: 1988, 1992, 1996, 2000. Repare que 1900 não é bissexto.*/
// const readline = require('readline-sync');
// let ano = +(readline.question('Digite um ano com 4 dígitos? '));

// if (ano % 400==0 || ano % 4==0 && ano % 100 !== 0 ){
//     console.log(`O ano ${ano} é bissexto.`);
// } else {
//     console.log(`O ano ${ano} não é bissexto.`);
//     }

/* 3. Uma determinada empresa vende seus produtos em quatro diferentes estados. Cada estado possui uma
taxação de imposto diferente sobre o produto (MG: 7%; SP: 12%; RJ: 15%; MS: 8%). Faça um programa em
Javascript, que o usuário entre com o valor e o estado destino do produto e o programa retorne o preç
o final do produto acrescido do imposto correspondente ao estado onde será vendido. O programa deve 
mostrar uma mensagem de erro caso o estado fornecido não esteja na lista de estados válidos.*/
// const readline = require('readline-sync');
// let estado, MG, SP, RJ, MS, produto;
// let percentualMG = +("0,07"), percentualSP = "0,12", percentualRJ = "0,15", percentualMS = "0,08";

// estado = readline.question('Qual é o seu estado? ');
// produto = +(readline.question('Qual o valor do produto?'));

// if (estado == MG){
//     console.log(`O produto em MG custa: ${produto} * ${percentualMG}`);
// }

/*4. Faça um programa que calcule e mostre a soma dos 50 primeiros números pares. Faça três versões
desse programa, cada uma usando uma estrutura de repetição diferente (for, while, do-while). Qual das
três estruturas é a mais adequada para este programa? Por que?*/

// let somaDosPares = 0;
// for (let numerosPares = 1; numerosPares <= 100; numerosPares++) {
//     if (numerosPares % 2 == 0){
//         somaDosPares += numerosPares;
//     }
// }
//     console.log(`A soma dos 50 primeiros números pares é: ${somaDosPares}`);

// let somaDosPares = 0;
// let numerosPares = 1;
// while (numerosPares <= 100) {
//     if (numerosPares % 2 == 0) {
//         somaDosPares += numerosPares; 
//     }
//     numerosPares ++;
// }
// console.log(`A soma dos 50 primeiros números pares é: ${somaDosPares}`);

// let somaDosPares = 0;
// let numerosPares = 1;
// do {
//     if (numerosPares % 2 == 0) {
//     somaDosPares += numerosPares; 
//     }
//     numerosPares ++;

// } while (numerosPares <= 100);
// console.log(`A soma dos 50 primeiros números pares é: ${somaDosPares}`);

/* 5. Faça um programa em Javascript que receba do usuário um número N e depois imprima os N primeiros
números naturais ímpares.*/
const readline = require('readline-sync');

let resultado;
let numeroN = +(readline.question('Digite um número?'));
for (indice=0; indice <= numeroN; indice++) {
    if (numeroN % 2 !== 0){
        resultado = ;
    }
}
console.log(`Os números ímpares até ${numeroN} são: ${resultado}`);

/*6. Uma empresa contrata um encanador a R$ 30,00 por dia. Crie um programa que solicite o número de
dias trabalhados pelo encanador e imprima a quantia líquida que deverá ser paga, sabendo-se que são
descontados 8% para pagamento de impostos e taxas devidas.*/
// const readline = require('readline-sync');

/* 7. Faça um programa para ler um horário (hora:minuto:segundo) de início e a duração, em segundos, 
de uma experiência biológica. O programa deve informar o horário (hora:minuto:segundo) de término da
mesma.*/


/* 8. Crie um programa de conversão entre as temperaturas Celsius, Farenheit e Kelvin usando funções
para isso. O programa deve ler a opção escolhida pelo usuário, que escolhe uma determinada conversã
opções de conversão são as seguintes: (utilize o switch case)
1.	de Celsius para Fahrenheit.
2.	de Celsius para Kelvin.
3.	de Fahrenheit para Celsius.
4.	de Fahrenheit para Kelvin.
5.	de Kelvin para Celsius.
6.	de Kelvin para Fahrenheit*/


/* 9. Fazer uma função que recebe um mês e um ano como parâmetros e retorna o número de dias daquele
mês daquele ano. Dica: um ano é bissexto quando é múltiplo de 4 e não múltiplo de 100, ou também
quando é múltiplo de 400.*/


/* 10. Faça uma função que recebe, por parâmetro, a hora de início e a hora de término de um jogo, 
ambas subdivididas em 2 valores distintos: horas e minutos. A função deve retornar, a duração do jogo
em minutos, considerando que o tempo máximo de duração de um jogo é de 24 horas e que o jogo pode
começar em um dia e terminar no outro.*/