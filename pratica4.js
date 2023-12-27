const fs = require('fs');

const rawData = fs.readFileSync('dados_pessoas.json');
const data = JSON.parse(rawData);

const array = [];

data.forEach((cur,) => {
    const {NomeCompleto, Endereco, Nacionalidade,Idade, Sexo} = cur;

    array.push([NomeCompleto, Endereco, Nacionalidade,Idade, Sexo])
})


console.log({ array })