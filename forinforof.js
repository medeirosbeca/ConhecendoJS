/* 1. Dado um array de números [3, 7, 2, 9, 5], crie um loop "for" que itere pelo array e exiba cada
elemento no console.*/
// const arrayNumeros = [3, 7, 2, 9, 5];
// for (let i = 0; i < arrayNumeros.length; i++) {
//     console.log(arrayNumeros[i]);
//   }
  
/*2. Suponha que você tenha um objeto com valores numéricos: {a: 10, b: 20, c: 30, d: 40}. Utilize um
laço "for...in" para iterar pelas chaves do objeto e calcular a soma de todos os valores.*/
// const objetosNumericos = {a: 10, b: 20, c: 30, d: 40};
// let soma = 0;
// for (let item in objetosNumericos) {
//     soma += objetosNumericos[item];
    
//   }  
// console.log(`A soma dos valores é: ${soma}`);

/*3. Dado um array de números [12, 5, 8, 21, 16, 7], crie um loop "for" que itere pelo array,
verificando se cada número é par. Se for par, adicione-o a um novo array. No final, exiba o novo
array com os números pares.*/

// const array = [12, 5, 8, 21, 16, 7];
// for (let indice = 0; indice < array.length; indice++) {
//     if (array[indice] % 2 == 0){
//         console.log('O número é par');
//     } else {
//     console.log('O número é ímpar');
//     }
// // }
// for (let indice in array) {
//     if (array[indice] % 2 == 0){
//         console.log('O número é par');
//     } else {
//        console.log('O número é ímpar');
//     }
// }
// for (let indice of array) {
//     if (indice % 2 == 0){
//         console.log('O número é par');
//     } else {
//         console.log('O número é ímpar');
//     }
// }


/* 4. Considere um objeto com informações de estudantes: const estudantes = { alice: 18, bob: 20,
carol: 19, david: 21 }; Utilize um loop "for...in" para verificar se há um estudante com a idade de
19 anos. Se sim, exiba "Nome do estudante: idade" no console.*/
// const estudantes = { alice: 18, bob: 20, carol: 19, david: 21 };
// for (let indice in estudantes) {
//     if (estudantes[indice] >= 19){
//         console.log(`Nome do estudante: ${indice} Idade: ${estudantes[indice]}`);
//     }
// }


/* 5. Imagine que você tem uma matriz bidimensional representando uma grade de pontos: const pontos
= [ [2, 5, 8], [3, 9, 12], [4, 6, 10]; Utilize dois loops "for" aninhados para calcular a soma de
todos os elementos da matriz e exibir o resultado.*/
// let soma = 0;
// const pontos = [[2, 5, 8], [3, 9, 12], [4, 6, 10]];
// for (let elemento of pontos){
//     for (let outroelemento of elemento) {
//         soma += outroelemento;
//     }
// }
// console.log(`A soma dos nunmeros é: ${soma}`);

// let soma = 0;
// const pontos = [[2, 5, 8], [3, 9, 12], [4, 6, 10]];
// for (let indiceDosElementosDePontos in pontos) { //indiceEmLinha posicao 0, 1 e 2.
//     for (let indiceDosElementosDosElementosDePontos in pontos[indiceDosElementosDePontos]) { //Procurar os indices dentro de cada posição: 2, 5, 8 primeira linha.
//         soma += pontos[indiceDosElementosDePontos][indiceDosElementosDosElementosDePontos];
//     }
    
// }  
// console.log(`A soma dos valores é: ${soma}`);
let soma = 0;
const pontos = [[2, 5, 8], [3, 9, 12], [4, 6, 10]];
for (let indice = 0; indice < pontos.length; indice++) {
    for (let indicedentro =0; indicedentro < pontos[indice].length; indicedentro++){
        soma += pontos[indice][indicedentro];
    }
}
console.log(`A soma dos valores é: ${soma}`);