// criando a classe aluno

class Aluno{

    #nota
    constructor(nome, idade, nota){
        // o constructor é uma método tradicional
        this.nome = nome;
        this.idade = idade;
        this.#nota = nota;
    }
        estudar = () => console.log(`${this.nome} está estudando.`);
        vernota = () => this.#nota
}

const laura= new Aluno("Laura", 17, 78)
console.log(laura.nome)
console.log(laura.vernota())

const benjamin= new Aluno("Benjamin", 13, 100)
console.log(benjamin.nome)
console.log(`O aluno se chama ${benjamin.nome} ,tem ${benjamin.idade} anos e conseguiu ${benjamin.vernota()} pontos na prova.`)