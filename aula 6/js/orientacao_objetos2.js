//criar uma classe professor com os atributos
//nome string
//idade number
//qtdAlunos number

//metodos 
//fazerChamada que recebe por parametro o nome do aluno e retorna (presença verificada)
//calculaMedia recebe 3 notas e devolve a media

//aops criar a classe instanciar 1 objeto da classe Professor para atribuir os valores
//atualizar algum valor de atributo do professor
//utilizar os metodos do professor

class Professor {
    nome
    idade
    qtdAlunos

    constructor(nome, idade, qtdAlunos) {
        this.nome = nome
        this.idade = idade
        this.qtdAlunos = qtdAlunos
    }
    fazerChamada(nomeAluno) {
        return nomeAluno + " prensencia verificada"
    }

calcularMedia(nota1,nota2,nota3){
    return (nota1+nota2+nota3) / 3
    }

}


let professor1= new Professor("Fulano",60,30)
professor1.qtdAlunos=20

console.log(professor1.fazerChamada("Ciclaninho"));

let media = professor1.calcularMedia(5,7,10)

console.log(media);

//instanciem outro professor e utilizem seus atributos e metodos
//ler valores separadamente
//atualizar valores e ver o ANTES e DEPOIS
//fazer mais de uma CHAMADA
//calcular mais de uma MEDIA

class professor2 {
    nome
    idade
    idadeqtdAlunos

    constructor(nome,idade, qtdAlunos) {
this.nome = nome
this.idade = idade
this.qtdAlunos = qtdAlunos

    }
fazerChamada(nomeAluno) {
    return nomeAluno + " Prensencia verificada"
}
calcularMedia(nota1,nota2,nota3){
    return (nota1+nota2+nota3) / 3
     }
}



let professor2= new Professor("Rubano",40,32)
professor2.qtdAlunos=32

console.log(professor2.fazerChamada("RUBANIN"));

let media = professor2.calcularMedia(4,10,9)

console.log(media);