// calculando media com forEach

const notas = [10, 6.5, 8, 7.5];

somaDasNotas = 0

// forEach aceita dois parametros um para pecorrer um array ou saber o indice do arrray 
notas.forEach((nota, i) => {
   somaDasNotas += nota
   console.log(i)
})

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);