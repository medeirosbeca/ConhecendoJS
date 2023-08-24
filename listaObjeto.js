// /*1. Como você cria um objeto vazio chamado pessoa em JavaScript?*/
// const pessoa = {
//     nome: ""
// }

// /*2. Como você adiciona a propriedade "nome" com o valor "João" a um objeto chamado "pessoa"?*/
const pessoa = {
    
}
pessoa.nome = "João";
console.log(pessoa.nome);

// /*3. Como você acessa o valor da propriedade "idade" de um objeto chamado "usuario"?*/
const usuario ={
    idade: 33,
}
console.log(usuario.idade);

// /*4. Suponha que você tenha um objeto "produto" com a propriedade "preco" definida como 50. Como
// você altera o valor dessa propriedade para 75?*/
const produto ={
    preco: 50,
}
produto.preco = 75;
console.log(produto.preco);

// /*5. Como você remove a propriedade "email" de um objeto chamado "contato"?*/
const contato ={
    email: "rm7765@gmail.com",
    nome: "Rebeca",
    idade: 33,
}
delete contato.email
console.log(contato.email);

// /*6. Como você adiciona uma propriedade "endereco" com o valor "Rua A, 123" a um objeto existente
// chamado "cliente"?*/
const cliente ={
   
}
cliente.endereco = "Rua A, 123";
console.log(cliente.endereco);

// /*7. Se você tem um objeto "empresa" com uma propriedade "departamentos", como você acessa o nome
// do primeiro departamento?*/
const empresa ={
    departamentos: ["RH","Financeiro","Administrativo"],
}
console.log(empresa.departamentos[0]);

/*8. Suponha que você tenha um objeto "aluno" com a propriedade "notas" contendo [85, 90, 78]. Como
você altera a segunda nota para 95?*/
const aluno ={
    notas: [85,90,78],
}
aluno.notas[1] = 95;
console.log(aluno.notas);


/*9. Se você tem um objeto "dados" com uma propriedade "valores" contendo [10, 20, 30], como você 
remove o segundo valor (20) desse array?*/
const dados ={
    valores: [10,20,30],
    
}
dados.valores.splice(1,1);
console.log(dados.valores);

/*10. Como você cria um objeto com as propriedades "titulo" (com o valor "Livro") e "autor" (com o
valor "Maria")?*/
const livraria = {
    titulo: "Livro",
    autor: "Maria",
}
console.log(livraria.titulo);
console.log(livraria.autor);