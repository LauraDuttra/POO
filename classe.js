// criando a classe aluno

class Aluno{
    constructor(nome, idade){
        // o constructor é uma método tradicional
        this.nome = nome;
        this.idade = idade;
    }
        estudar = () => console.log(`${this.nome} está estudando.`);
        feliz = () => console.log(`${this.nome} está feliz!`);
}

const laura= new Aluno("Laura", 17)
const isabela= new Aluno("Isabela", 17)
const nadja= new Aluno("Nadja", 25)
const raul= new Aluno("Raul", 27)

console.log(laura.nome)

isabela.estudar()

console.log(nadja.nome, nadja.idade)

raul.feliz()

console.log(isabela.nome, isabela,idade, isabela. feliz)
console.log(`${laura.nome} tem ${laura.idade} anos e ${laura.feliz}`);