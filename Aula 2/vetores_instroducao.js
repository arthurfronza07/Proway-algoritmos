console.log("deu certo");
let nomes=[]

console.log(nomes);

let cursos=[
    "algoritmos 1",
    "algoritmos 2",
    "Java fundamentos",
    "Fundamentos html5",
    "JavaScript avançado",
    "MySQl",
    "Typescript",
    "Fundamentos em css",
]

console.log(cursos);

console.log(cursos[5]);

console.log(cursos.indexOf("Fundamentos em html5"));

console.log(cursos.indexOf("Typescript"));

cursos.splice(4,3)
//para deletar um iten na lista é necessário informar a posição
// e a quantidade de itens para deletar

console.log(cursos);


cursos.push("Python")//inserindo item no final da lista
cursos.push("Angular")//inserindo item no final da lista

console.log(cursos)

//inciando o contador com zero pois o indice na lista começa com zero
//enquanto for menor que o tamnho da lista, ou seja tamanho -1
//incremento de 1 em 1
for(let contador=0;contador<cursos.length;contador++){
    console.log("Na posicao "+contador+" tem o valor = "+cursos[contador]);
}


//inciando o contador com 1 pq é mais intuitivo fazer a contagem com 1
//mas tenho que ir ate o tamanho da lista
//incremento de 1 em 1
console.log(==================================);
for (let contador = 1; contador <= cursos.length; contador++) {
    //ajustando o acesso ao valor para localizar o indice correto, pois começa com 0
    //se eu incio com 1 eu estari pulando o primeiro item e acesso um item extra que não existe
    console.log("Na posição " + contador + "tem o valor = " + cursos[contador-1]);
}