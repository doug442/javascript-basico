//Aula 05 part01

//let tag = document.getElementsByTagName('p')

//alert(tag[0].innerText)
//console.log(tag[0].innerText)
//alert(tag[0].innerHTML)

/*let tag = document.getElementsByTagName('ul')
let ordered = document.getElementsByTagName('ol')

let novo = document.createElement('li')
let novo2 = document.createElement('li')

novo.innerText = 'PHP'
novo2.innerText = 'Ruby'

tag[0].appendChild(novo)
tag[0].appendChild(novo2) */

//ordered[0].appendChild(novo)
//ordered[0].appendChild(novo2)

//------------------------------------------------------------

//Aula05 part02

//let const

//OBS: 
// 1 - Usando let a varivel precisa ser inicializada antes, o que não acontece com o var
// 2 - Usando o const a variavel não pode ser modificada diretamente

/*
function mostraIdade(idade=33){ // se não for passado valor exibe o numero 33
    return idade
}

console.log(mostraIdade())
document.write(mostraIdade(27)) //passando um valor o numero é alterado
alert(mostraIdade())
*/
/*
function mostraIdade(idade=33){ // se não for passado valor exibe o numero 33
    //console.log(idade)
    document.write(idade)
}

//mostraIdade()
mostraIdade(27) // passando um valor 27 o resultado é alterado
*/
/*
let nome="João", idade=27, endereco = "Praia do Futuro"

//console.log("Nome: " +nome+ " Idade: " +idade+ " Endereço: " +endereco)
document.write(`Nome: ${nome} Idade: ${idade} Endereço: ${endereco}`)

document.write("<br><br>")


function soma(x,y){
    return x + y
}

//console.log(soma(5,7))
document.write(soma(10,20))
document.write("<br><br>")

//Usando Arrowfunction fica assim
let somaArrow = (x,y) =>  x + y 
//OBS:
// quando houver mais de um parametro deve ficar entre parenteses
//com Arrowfunction é mais simples

document.write(somaArrow(10,20)) */

//------------------------------------------------------------

//Aula05 part03
//Exemplo de programação assincrona(muito importante para o uso com o node)

function efeturaPagamento(total){
    if(total<=saldo){
        return Promise.resolve("Compra autorizada!")
    } else {
        return Promise.reject("Transação interropida, Saldo insuficiente.")
    }

}

let saldo = 100

efeturaPagamento(200)
    //.then(result => console.log("Promisse resolved: " +result))
    .then(result => document.write("Promisse resolved: " +result))
    //.catch(error => console.log("Promisse rejected: " +error))
    .catch(error => document.write("Promisse rejected: " +error))

//console.log("Processando...")
document.write("Processando...<br>")