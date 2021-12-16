
let nome="Arthur Fronza" // variavel do tipo tring
let idade=21             // varialvel do tipo number
let distanciaProway=0.3  // variavel do tipo numer

console.log("Olá meu nome é ",nome," e tenho",idade,"anos e moro a",distanciaProway,"KM de distancia daqui");

//let bairro = prompt ("Infome o seu bairro")

//alert (bairro)

if(idade>=18){
   console.log("vc é maior de idade");
}else{
 console.log("Vc é de menor");
}



//fazer um if que pergunte é menor que 15 anos
//uma mensagem para cada caminho do if e else

console.log("Escolha uma opção");
console.log("1 - primavera");
console.log("2 - verão");
console.log("3 - outono");
console.log("4 - inverno");
let opcao=50

switch (opcao)  {
    case 1:
         console.log("vc escolheu primavera");
break
    case 2:
        console.log("Vv escolheu verão");
break
default:
      console.log("escolheu nada"); 
      break     

}


let quantidade=15

for(let contador=1; contador<= quantidade; contador++) {
     console.log("repetindo pela ", contador, "x");

}

//for("let variavel=1; variavel<=5; variavel+=10"){
//console.log(("repetindo dnv pela ",variavel,"° x");    
//}
//let reposta
//do{
// resposta = prompt (" tinham 2 dog, pita e repita, pita morreu, oque sobrou?")


//}while (resposta=="repita")