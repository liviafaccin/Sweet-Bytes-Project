// Importa a configuração do banco de dados (já existe no projeto)
var database = require("../database/config");

function salvarQuiz(fkUsuario) {

    // Essa instrução SQL insere um registro na tabela quiz
    // O fkUsuario é o id do usuário que fez o quiz
    var instrucao = `
        INSERT INTO quiz (fkUsuario) 
        VALUES (${fkUsuario});
    `;

    console.log("Executando SQL: " + instrucao);

    // Executa a instrução no banco e retorna o resultado
    return database.executar(instrucao);
}

function salvarResultado(confeiteiroAfetivo, doceEmpreendedor, chefCriativo, confeiteiroWellness, mestreDaPraticidade, fkQuiz) {

    // Essa instrução SQL insere o resultado na tabela resultadoDash
    var instrucao = `
        INSERT INTO resultadoDash 
            (confeiteiroAfetivo, doceEmpreendedor, chefCriativo, confeiteiroWellness, mestreDaPraticidade, fkQuiz) 
        VALUES 
            (${confeiteiroAfetivo}, ${doceEmpreendedor}, ${chefCriativo}, ${confeiteiroWellness}, ${mestreDaPraticidade}, ${fkQuiz});
    `;

    console.log("Executando SQL: " + instrucao);

    return database.executar(instrucao);
}

function buscarUltimoResultado(fkUsuario) {

    var instrucao = `
        SELECT 
            rd.confeiteiroAfetivo,
            rd.doceEmpreendedor,
            rd.chefCriativo,
            rd.confeiteiroWellness,
            rd.mestreDaPraticidade
        FROM resultadoDash rd
        JOIN quiz q ON rd.fkQuiz = q.idQuiz
        WHERE q.fkUsuario = ${fkUsuario}
        ORDER BY rd.idResultadoDash DESC
        LIMIT 1;
    `;

    console.log("Executando SQL: " + instrucao);
    return database.executar(instrucao);
}

// Exporta as funções para o controller conseguir usar
module.exports = {
    salvarQuiz,
    salvarResultado,
    buscarUltimoResultado
};