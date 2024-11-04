const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('public'));


app.post('/submit-form', (req, res) => {
    const { nome, codigo, cargaHoraria, professor, semestre, preRequisitos, tipo, descricao } = req.body;

    console.log(`Disciplina: ${nome}, Código: ${codigo}, Carga Horária: ${cargaHoraria}, Professor: ${professor}, Semestre: ${semestre}, Pré-requisitos: ${preRequisitos}, Tipo: ${tipo}, Descrição: ${descricao}`);

    res.send(`Dados recebidos: <br>Disciplina - ${nome} <br>Código - ${codigo} <br>Carga Horária - ${cargaHoraria} <br>Professor - ${professor} <br>Semestre - ${semestre} <br>Pré-requisitos - ${preRequisitos || 'Nenhum'} <br>Tipo - ${tipo} <br>Descrição - ${descricao || 'Nenhuma'}`);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
