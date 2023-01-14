const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

//const meuSet = new Set (nomes) primeira forma de fazer 

 const nomesAtualizado = [...new Set(nomes)] // para fazer um clone do array e não motificar o original e forma direta de escrever 



console.log(nomesAtualizado)
console.log(nomes)