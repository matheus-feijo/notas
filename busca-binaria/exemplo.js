const array = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

let min = 0;
let max = array.length - 1
let palpite = (min + max) % 2
let countConsultasBinaria = 0
let countConsultaNormal = 0


// BUSCANDO O NUMERO 67 NA LISTA EM UM ARRAY COM OS ITEMS ORDENADOS

for (let i = 0; i < array.length; i++) {
    countConsultasBinaria++
    if (array[palpite] === 67) {
        break
    } else if (array[palpite] > 67) {
        max = palpite
    } else {
        min = palpite
    }
    palpite = parseInt((min + max) / 2)
}

console.log(`Foi preciso ${countConsultasBinaria} consultas na busca binária para achar o valor 67`)

for (let i = 0; i < array.length; i++) {
    countConsultaNormal++
    if (array[i] === 67) {
        break
    }
}

console.log(`Foi preciso ${countConsultaNormal} consultas na busca normal para achar o valor 67`)


