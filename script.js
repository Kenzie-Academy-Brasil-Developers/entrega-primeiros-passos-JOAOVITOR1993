



let precoProdutoRefrigerante = parseFloat(prompt("Digite o valor do Refrigerante"))
let precoProdutoMacarrao = parseFloat(prompt("Digite o valor do Macarrão"))
let precoProdutoErvilha = parseFloat(prompt("Digite o valor da Ervilha"))
let precoProdutoArroz = parseFloat(prompt("Digite o valor do Arroz"))
let precoProdutoFeijao = parseFloat(prompt("Digite o valor do Feijão"))
let precoProdutoVinho = parseFloat(prompt("Digite o valor do Vinho")) 

let quantidadeRefrigerante = parseInt(prompt("Quantas Unidades de Refrigerante?"))
let quantidadeMacarrao = parseInt(prompt("Quantas Unidades de Macarrao?"))
let quantidadeErvilha = parseInt(prompt("Quantas Unidades de Ervilha?"))
let quantidadeArroz = parseInt(prompt("Quantas Unidades de Arroz?"))
let quantidadeFeijao = parseInt(prompt("Quantas Unidades de Feijao?"))
let quantidadeVinho = parseInt(prompt("Quantas Unidades de Vinho?")) 

let totalRefrigerante = precoProdutoRefrigerante * quantidadeRefrigerante
let totalMacarrao = precoProdutoMacarrao * quantidadeMacarrao
let totalErvilha = precoProdutoErvilha * quantidadeErvilha
let totalArroz = precoProdutoArroz * quantidadeArroz
let totalFeijao = precoProdutoFeijao * quantidadeFeijao
let totalVinho = precoProdutoVinho * quantidadeVinho

let total = totalRefrigerante + totalMacarrao + totalErvilha + totalArroz + totalFeijao + totalVinho
let totalSemVinho = totalRefrigerante + totalMacarrao + totalErvilha + totalArroz + totalFeijao 

console.log(`Valor total da compra: R$${total}`)
if(total % 2 == 0){
    console.log(`Meu amigo irá pagar o total de: R$${totalSemVinho / 2 + totalVinho}`)
    console.log(`Eu irei pagar o total de R$${totalSemVinho / 2}`)
    alert(`Valor total da compra: ${total}`)
    alert(`Meu amigo irá pagar o total de: R$${totalSemVinho / 2 + totalVinho}`)
    alert(`Eu irei pagar o total de R$${totalSemVinho / 2}`)
}else{
    console.log(`Eu irei pagar o total de R$${total / 2}`) 
    console.log(`Meu amigo irá pagar o total de: R$${total / 2}`) 
    alert(`Valor total da compra: ${total}`)
    alert(`Meu amigo irá pagar o total de: R$${total / 2}`)
    alert(`Eu irei pagar o total de R$${total / 2}`)    
}






