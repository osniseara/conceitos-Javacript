//slice dividindo a array

const carros = ['ka','ram','fiesta','fit','civic','sandero','logan','mustang','city','fusca'];

const loja1 = carros.slice(0,carros.length/2);
const loja2 = carros.slice(carros.length/2);

console.log('O total de Carros é: ', carros.length);
console.log(`Os carros na loja 1 são:  ${loja1}`);
console.log(`Os carros da loja 2 são:  ${loja2}`);

//splice colocando e alterando a array
// adicionando no indice 0, sem remover nenhum item, adicionando outro
carros.splice(0,0,'cerato');
carros.splice(2,1,'CRV');

console.log(carros);