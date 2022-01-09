const alunos = ['Joao','Juliana','caio','ana'];

const mediaDosAlunos= [10,7,9,6];

let listaDeNotasEAlunos = [alunos,mediaDosAlunos]

const exibeNomeNota =  (nomeDoAluno) => {
    // includes faz uma busca pelo valor ou tipo de dado. retorna boolean
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        //indexOf faz uma busca e retorna o numero do indice ana se encontra no indice 3
        indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        // retornou o nome da aluna no indice                     retornou a nota no mesmo indice (atenção ao indce da array)
        return listaDeNotasEAlunos[0][indice] + ' sua media é ' + listaDeNotasEAlunos[1][indice]
    }else {
        return 'Aluno não encontrado.'
    }


}   

console.log(exibeNomeNota('Juliana'));