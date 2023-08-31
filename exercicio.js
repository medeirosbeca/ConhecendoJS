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

// const readline = require('readline-sync');

// let resultado;
// let numeroN = +(readline.question('Digite um número?'));
// for (indice=1; indice <= numeroN; indice++) {
//     if (indice % 2 != 0){
//     console.log(`Os números ímpares são: ${indice}`);
//     }
// }

/*6. Uma empresa contrata um encanador a R$ 30,00 por dia. Crie um programa que solicite o número de
dias trabalhados pelo encanador e imprima a quantia líquida que deverá ser paga, sabendo-se que são
descontados 8% para pagamento de impostos e taxas devidas.*/

// const readline = require('readline-sync');

// let dias = +(readline.question('Quantos dias trabalhados?'));
// dias *= 30;

// let liquido = dias * 92/100;
// console.log(`Será pago ao encanador R$ ${liquido}`);

/* 7. Faça um programa para ler um horário (hora:minuto:segundo) de início e a duração, em segundos, 
de uma experiência biológica. O programa deve informar o horário (hora:minuto:segundo) de término da
mesma.*/
// int muda_horario (int hour, int minutes){
// 	int minutesnew;
// 	minutesnew= (hour * 60) + minutes;
// }
// int dif_hora (int hour1, int minute1, int hour2, int minute2){
// 	int dif = muda_horario (hour1, minute1) - muda_horario (hour2, minute2);
// }
// int main (){
// 	int hora1, hora2, minuto1, minuto2, diferenca;
// 	//get #1 time
// 	printf ("Insira o primeiro horario:");
// 	scanf ("%i:%i", &hora1, &minuto1);
// 	//get #2
// 	printf ("Insira o segundo horario:");
// 	scanf ("%i:%i", &hora2, &minuto2);
// 	diferenca = dif_hora (hora1, minuto1, hora2, minuto2);
// 	//print times in minutes
// 	printf ("A diferenca em minutos eh: %i\n", diferenca);
// 	system ("pause");
// 	return 0;
// } 
// const readline = require('readline-sync');

// let horarioInicio = +(readline.question('Digite a hora no formato (hh:mm:ss):'));


// let horas[1] = Number(horas[1]) + duracao;

// console.log(horas[0]);
// console.log(horas[1]);
// console.log(horas[2]);


/* 8. Uma empresa paga R$ 10,00 por hora normal trabalhada e R$ 15,00 por hora extra. Escreva um
programa que leia o total de horas normais e o total de horas extras trabalhadas por um empregado em
um ano e calcule o salário anual deste trabalhador.*/


/* 9. Elabore um programa em JS para que leia três números e mostre-os em ordem crescente. */ 

/* 10. Crie um programa de conversão entre as temperaturas Celsius, Farenheit e Kelvin usando funções
para isso. O programa deve ler a opção escolhida pelo usuário, que escolhe uma determinada conversão
opções de conversão são as seguintes: (utilize o switch case)
1.	de Celsius para Fahrenheit.
2.	de Celsius para Kelvin.
3.	de Fahrenheit para Celsius.
4.	de Fahrenheit para Kelvin.
5.	de Kelvin para Celsius.
6.	de Kelvin para Fahrenheit*/

// function temperatuas(){
//     let temperatura = readline.questionInt('Temperatura 1:');
//     let conversao = readline.questionInt('Digite qual opção você quer converter: 1. de Celsius para Fahrenheit. 2. de Celsius para Kelvin. 3. de Fahrenheit para Celsius. 4. de Fahrenheit para Kelvin. 5. de Kelvin para Celsius. 6. de Kelvin para Fahrenheit'); 
//     let resultado;

//     switch (conversao){
//     case 1:
//         resultado = (1.8*temperatura + 32);
//     break;
//     case 2:
//         resultado = + 273
//     break;
//     case 3:
//         resultado = ((temperatura-32)*5/9);
//     break;
//     case 4:

//     break;

//     case 5:

//     break;

//     case 6:

//     break;

//     default ("Escolha as opções de 1 a 6.");
//     }
// }

/* 11. Fazer uma função que recebe um mês e um ano como parâmetros e retorna o número de dias daquele
mês daquele ano. Dica: um ano é bissexto quando é múltiplo de 4 e não múltiplo de 100, ou também
quando é múltiplo de 400.*/

// const readline = require('readline-sync');

// mes = readline.questionInt('Digite um mês de 1 a 12:');
// ano = readline.questionInt('Digite um ano:');
// function recebendo (mes,ano){
    
//     if (mes == 2){
//         if (ano % 400==0 || ano % 4==0 && ano % 100 !== 0 ){
//         console.log(`Existem 29 dias em ${mes} de ${ano}.`);
//     }  else if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
//         console.log(`Existem 31 dias em ${mes} de ${ano}.`);
//     } else {
//         console.log(`Existem 30 dias em ${mes} de ${ano}.`);
//         }  
//     }
// }
// recebendo();

/* 12. Faça uma função que recebe, por parâmetro, a hora de início e a hora de término de um jogo, 
ambas subdivididas em 2 valores distintos: horas e minutos. A função deve retornar, a duração do jogo
em minutos, considerando que o tempo máximo de duração de um jogo é de 24 horas e que o jogo pode
começar em um dia e terminar no outro.*/

const readline = require('readline-sync');

let horaTotal = 0;
let minutoJogo;

function duracao (horaInicio, minutoInicio, horaTermino, minutoTermino){
    if (horaInicio >= horaTermino){
        horaTotal = 12;
        horaTermino += 12;
    }
    if (minutoInicio >= minutoTermino){
        horaTotal += -1;
        minutoTermino =+ 60;
    }
    minutoJogo = minutoTermino - minutoInicio;
    horaTotal = horaTotal + (horaTermino = horaInicio);
}

horaInicio = readline.questionInt('Digite um mês de 1 a 12:');
// ano = readline.questionInt('Digite um ano:');
jogo ()

/* 13.Escreva a função para cálculo do N-ésimo termo da série de Fibonacci utilizando recursividade.*/