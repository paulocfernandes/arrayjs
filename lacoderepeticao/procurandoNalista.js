// Arquivo procurando-aluno.js

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

const exibiNotasMedias = (aluno) => {
    if (listaDeAlunosEMedias[0].includes(aluno)) {
       // const alunos = listaDeAlunosEMedias[0]; primeira forma de fazer 
        //const medias = listaDeAlunosEMedias[1]; 

        const [alunos , medias] = listaDeAlunosEMedias // sintaxe desestruturação de lista 

        const indice = alunos[0].indexOf(aluno) // metodo index.Of() descobrir qual indidce do aluno 

        const mediaDoAluno = medias[indice] // para entra da na segunda lista

        console.log(`${aluno} tem a média ${mediaDoAluno}`)
        
    }else{
        console.log("Aluno não cadastrado")
    }
}

exibiNotasMedias("João")

//Obs. não altera array original