console.log("criar um vetor de gostos pessoais");
console.log("pode criar o vetor ja com valor ou não");
console.log(se nao tiver valores usar o push pra incluir item a item);
console.log("exibor a lista toda com LOG");

let gostos=[
    "filmes",
    "series",
    "basquetes",
]


//usando o push incluir um item na lista
gostos.push("lecionar")

//exibi em log como esta a variavel gostos
console.log (gostos);

//percorrendo o vetor de 0 ate tamnho da lista-1
//de 1 em 1
for(let contador=0;contador<gostos.length;contador++){
//acessando o valor que esta na posicao [contador]
console.log("gosto muito de "+gostos[contador]);
}

console.log(gostos[0]);
console.log("O que eu gosto mais é "+ gostos[2]);