const nomes = ["Evaldo", "Mari", "Camis"];
 //primeira forma de escrever função callbacks
 
// nomes.forEach(function (nome) {
//  console.log(nome);
// });

// nomes.forEach((nome) => {
//  console.log(nome);
// });

function imprimeNome(nome) {
  console.log(nome);
}

nomes.forEach(imprimeNome);