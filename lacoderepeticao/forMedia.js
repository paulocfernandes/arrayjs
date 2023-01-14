const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0
let i = 0
for(i; i < notas.length; i++) {
    somaDasNotas += notas[i]
}

const media = somaDasNotas / notas.length 

console.log(media)