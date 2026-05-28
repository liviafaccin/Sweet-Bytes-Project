var database = require("../database/config");

function salvarQuiz(fkUsuario) {
    var instrucao = `
        INSERT INTO quiz (fkUsuario) 
        VALUES (${fkUsuario});
    `;

    console.log("Executando SQL: " + instrucao);

    return database.executar(instrucao);
}

function salvarResultado(confeiteiroAfetivo, doceEmpreendedor, chefCriativo, confeiteiroWellness, mestreDaPraticidade, fkQuiz) {

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

module.exports = {
    salvarQuiz,
    salvarResultado,
    buscarUltimoResultado
};