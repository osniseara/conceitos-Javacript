const nomes =['joão', 'ana','marjorie', 'maximus', 'gomes','jaque']


const sala1 = nomes.slice(0, nomes.length/2);
const sala2 = nomes.slice(nomes.length/2);
console.log(nomes.length);
console.log(`Alunos da sala 1:  ${sala1}`);
console.log(`Alunos sala 2:  ${sala2}`)