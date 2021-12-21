//criar uma classe calculadora com os atributos numeroA e numeroB
//criar os metodos somar, subtrait,dividir,multiplicar,
//capturarNumeros e ele recebe por parametro o valor de A e B (com prompt)

//esses metodos serão chamados por botoes no html usando onclick="nomedafuncao()"

class Calculadora {
    numeroA
    numeroB

    constructor(numeroA, numeroB) {
        this.numeroA = numeroA
        this.numeroB = numeroB

    }
    capturarNumeros(nA, nB,operacao) {
        this.numeroA
        this.numeroB

        switch (operacao){
            case "somar"
            this.somar()
            break;
            case "diminuir"
            this.subtrair()
            break
        
        }
    }
    somar() {
        return this.numeroA + this.numeroB
    }
    subtrair() {
        return this.numeroA - this.numeroB
    }
}

let.calculadora= new Calculadora(1,2)
console.log("A soma é"+calculadora);