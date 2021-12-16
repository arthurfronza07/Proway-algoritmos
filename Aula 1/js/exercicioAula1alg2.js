/*

Solicite uma quantidade definida de numero a serem capturados
para cada captura deve verificar qual o maior numero e o menor numero

após a captura dos numeros exibir o maior o menor e a media geral desses numero

*/

let quantidade = Number (prompt("Informe quantos numeros serão capturados"))
let menor 
let maior 
let media
let soma

soma=0
for (let contador=1;contador <=quantidade;contador++){
    let numero = Number (prompt("Informe o "+contador+"° numero"))
 
    if (contador == 1){
soma+=numero
      menor = numero
      maior = numero
    }else{

    }if (numero<menor){
        menor=numero
     
     if(numero>maior){
         maior=numero
     }   

    }
}

media=soma/quantidade
alert ("Menor "+menor)
alert ("Maior "+maior)
alert ("Media "+media)
