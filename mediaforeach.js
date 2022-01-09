const notas = [10,6.5,8,7.5];

let somaDasNotas = 0;

notas.forEach(nota => {
    somaDasNotas += nota
})

let media = somaDasNotas/notas.length

//console.log(media);

const sala1 =[7,8.5,3];
const sala2 = [7,6,9];
const sala3 = [7,8,9];

const notasGerais = [sala1,sala2,sala3];

//  let media = 0;

for(i=0; i<notasGerais.length;i++){
    for(j=0; j<notasGerais[i].length; j++){
        media += notasGerais[i][j]/notasGerais[i].length;
    }
}

media = media/notasGerais.length;

console.log(media);