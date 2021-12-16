/*
criar variaveis para o nome do aluno, as 3 notas e calcular a media

//podem usar 2 variaveis apra as notas ou usar prepeticao para a quantidade de notas
*/

//let nota1 = Number (prompt("informe a 1° nota do aluno" + nome))
//let nota2 = Number (prompt("informe a 2° nota do aluno" + nome))
//let nota3 = prompt("informe a 3° nota do aluno" + nome)

let media = (nota1 + nota2+ nota3) / 3

let qtdNotas
let notas
let soma
qtdNotas= Number ( prombt ("Informe quantas notas deja capturar") )

//variavel temporaria com ponto de partida
//condição de permanencia
//incremento ouy decremento

soma=0
for(let contador=1; contador <=qtdNotas; contador++){
    nota = Number( prombt("Infomre a "+contador+"° nota do aluno "+nome))
soma+= nota
}

let media = (soma)/qtdNotas

alert("Media é "+ media);

if (media < 7 ) {
    alert("Reprovado");
} else {
    alert ("Aprovado");
}