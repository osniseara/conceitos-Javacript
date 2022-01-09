// lista de duas dimensoes sao listas que contem listas dentro delas
const alunos = ['Joao','Juliana','caio','ana'];

const mediaDosAlunos= [10,7,9,6];

let listaDeNotasEAlunos = [alunos,mediaDosAlunos]
// o primeiro indice corresponde a primeira array o segundo a segunda array com suas respectivas posições nas suas arrays                         
//console.log(`${listaDeNotasEAlunos[0][1]} sua media é ${listaDeNotasEAlunos[1][1]}`)
const nomes = ['Osni','Jaque','Amanda'];
const idade = [20,22,34];
const faculdade = [true,false,true];

let informacaoFuncionarios = [nomes,idade,faculdade]

console.log(`O funcionario ${informacaoFuncionarios[0][0]} tem a idade de ${informacaoFuncionarios[1][0]}, ele possui faculdade ${informacaoFuncionarios[2][0]}`);
console.log(`O funcionario ${informacaoFuncionarios[0][1]} tem a idade de ${informacaoFuncionarios[1][1]}, possui faculdade? ${informacaoFuncionarios[2][1]}`);
console.log(`O funcionario ${informacaoFuncionarios[0][2]},te a idade de ${informacaoFuncionarios[1][2]}, ele possui faculdade? ${informacaoFuncionarios[2][2]}`);