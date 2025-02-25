// criando a classe aluno

class Pessoa{

    constructor(nome, idade){
        // o constructor é uma método tradicional
        this.nome = nome;
        this.idade = idade;
    }

    class Aluno extends{
        estudar = () => console.log(`Aluno ${this.nome} está estudando.`)
    }
    
    class Professor extends Pessoa{
        ensinar = () => console.log(`Professor ${this.nome} está ensinando.`)
    }   

    apresentar = () => console.log(`Olá, sou ${this.nome} e tenho ${this.idade} anos.`);
}


const benjamin= new Pessoa("Benjamin", 18)

const raul = new Professor("Raul", 28)

benjamin.apresentar();
raul.apresentar();

console.log(benjamin.nome)
console.log(`Ola, sou ${benjamin.nome} e tenho ${benjamin.idade} anos.`)