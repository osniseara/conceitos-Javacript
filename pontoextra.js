const notas = [10,9,8,7,6];
// ? === if / : === else
const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota);

console.log(notasAtualizadas);