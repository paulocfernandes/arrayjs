// operador de clona arrays sem alterar o original  (operador de espalhamento)

const notas = [7, 7, 8, 9];

const nonaNotas = [5, ...notas, 10] // no lugar de usadr o push para adicionar notas posso colocar as notas no operador de espalhamento no inicio ou no fim 

console.log (nonaNotas)
console.log(notas)