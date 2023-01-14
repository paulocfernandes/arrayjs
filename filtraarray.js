// metodo filter 

const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

// sempre tem que retorna verdadeiro ou flaso para saber se vai ser incluso ou não 
// quando não utilizar o primeiro parametro colocar _ como covenção 

const reprovados = alunos.filter((_, i) =>  medias[i] < 7 )

//const reprovados = alunos.filter((aluno, i) => {
  //  return medias[i] < 7 
//})

console.log (reprovados)