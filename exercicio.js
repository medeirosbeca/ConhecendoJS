/* 1. Faça um programa que leia o nome do aluno, três notas e mostre o nome e a média(aritmética) do
aluno.*/
const readline = require('readline-sync');
let nome, nota1, nota2, nota3, media;

nome = readline.question('Qual é o seu nome? ');
nota1 = parseInt(readline.question('Digite sua primeira nota? '));
nota2 = parseInt(readline.question('Digite sua segunda nota? '));
nota3 = parseInt(readline.question('Digite sua terceira nota? '));
media = (nota1 + nota2 + nota3)/3;

console.log(`Olá ${nome}! Sua média foi: ${media}`);
