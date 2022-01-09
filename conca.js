const salaDePython = ['Melissa', 'Helena', 'Rodrigo'];

const saladeJavascript = ['ju','Leo','Raquel'];

/* function salas(...args) {
    return args.reduce ((acc, value)=> acc+value);
}

console.log(salas(salaDePython,saladeJavascript)); */

const salasUnificadas = salaDePython.concat(saladeJavascript);

console.log(salasUnificadas);