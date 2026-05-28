var quizModel = require("../models/quizModel");

function salvarResultado(req, res) {

    var fkUsuario = req.body.fkUsuario;
    var confeiteiroAfetivo = req.body.confeiteiroAfetivo;
    var doceEmpreendedor = req.body.doceEmpreendedor;
    var chefCriativo = req.body.chefCriativo;
    var confeiteiroWellness = req.body.confeiteiroWellness;
    var mestreDaPraticidade = req.body.mestreDaPraticidade;

    if (fkUsuario == undefined) {
        res.status(400).send("Usuário não informado!");
        return;
    }

    quizModel.salvarQuiz(fkUsuario)
        .then(function (resultado) {

            var idQuiz = resultado.insertId;
            console.log("Quiz salvo com id:", idQuiz);

            return quizModel.salvarResultado(
                confeiteiroAfetivo,
                doceEmpreendedor,
                chefCriativo,
                confeiteiroWellness,
                mestreDaPraticidade,
                idQuiz
            );
        })
        .then(function () {
            res.status(200).send("Quiz e resultado salvos com sucesso!");
        })
        .catch(function (erro) {
            console.log("Erro ao salvar:", erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarResultado(req, res) {

    var fkUsuario = req.params.fkUsuario;

    quizModel.buscarUltimoResultado(fkUsuario)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log("Erro ao buscar:", erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    salvarResultado,
    buscarResultado
};