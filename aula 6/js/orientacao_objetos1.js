console.log("deu certo");

//aluno
//atributos = variaveis (5)
//nota number
//nome string
//idade number
//matricula
//senha
//
//metodos = funcoes sem o comando function
//conversar(ouviu) --> return resposta
//responderChmada (professor) ---> "professor, MEU_NOME presente"
//me apresentar () -----> "Oi meu nome é NOME tenho XX anos minha matricula é XXX"


class Aluno {
    nome
    idade
    matricula
    senha
    nota

    //declaração do construtor que será chamado de forma externa
    //para criar um OJETO da classe Aluno
    consultor(nome,idade,matricula,senha,nota){
          //passando os valores dos parametros para os meus atributos diferenciando com (THIS.)         
          this.nome=nome
          this.idade=idade
          this.matricula=matricula
          this.senha=senha
          this.nota=nota
    }
    connversar(ouvir){
        return ouviu+", Humm que interessante..."
    }
    chamarProfessor (mensagem){
        return "Já resolveu era isso ("+mensagem+")"
    }
    meApresentar  (mensagem){
        return "ola meu nome é" + this.nome +
        "tenho " + this.idade + "anos,matricula = ",this.matricula +
    
    }

}


let nome="Arthur"

let aluno1 = new Aluno("Arthur Fronza",21,"000","123#321",10)

let alunoX=new Aluno("Miranha",20,"miranha3","000","432#123",10)

console.log(aluno1);
console.log(aluno1.nome);
console.log(aluno1.matricula);

console.log(alunoX.senha);

aluno1.nome="XXX"
console.log(aluno1);

alunoX.nome="Outro nome"
alunoX.idade=13
alunoX.matricula="002"
alunoX.senha="123"
alunoX.nota=2

console.log(alunoX);
console.log(alunoX.idade);


let colega = new alunoX("Meliante",33,"meli123","123",10)
console.log(colega);
colega.matricula="meli000"
console.log(colega);


aluno.conversar("sobre o filme do miranha")

document.write(aluno1.conversar("sobre o filme do miranha"))

let resposta = aluno1.conversar("sobre o filme do miranha")

console.log(resposta);

console.log(alunoX.conversar("Nada a declara"));


//como eu crio um objeto da classe Aluno?
//instaciando um objeto da classe Aluno com os valores dos atributos passados no construtor
let aluno10 = new Aluno("Derik",20,"90909","euSouDerik",2)

//como eu acesso cada atributo do objeto?(ver no minimo 3)
console.log("Ola meu nome é"aluno10.nome);
document.writeln("Oi eu tenho "aluno10.idade+" anos")
let variavel = aluno10.matricula

//como eu atualizo o atributo de um objeto? (atualizar 3 atributos)
aluno10.nome="Luiz"
aluno10.idade=14
aluno10.senha="1234"
console.log(aluno10);

//executando metodos de um objeto da classe aluno
console.log(aluno10.connversar("aprendi orientação a objetos"));

console.log(aluno10.chamarProfessor("erro na linha 64"));

console.log(aluno1.meAprensentar());


