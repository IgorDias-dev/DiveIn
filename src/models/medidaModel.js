var database = require("../database/config");

function buscarUltimasMedidas(historico, limite_linhas) {

    var instrucaoSql = `SELECT
        count(c.nome) as quantidade,
        date_format(r.dtRegistro, '%m/%Y') as periodo,
        r.usuario_idUsuario as Usuario
            from criatura as c
                join registro as r
                    on c.idCriatura = r.criatura_idCriatura
                        where r.usuario_idUsuario = ${historico}
                            group by periodo, Usuario 
                                order by periodo limit ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(historico) {

    var instrucaoSql = `SELECT
        count(c.nome) as quantidade,
        date_format(r.dtRegistro, '%m/%Y') as periodo,
        r.usuario_idUsuario as Usuario
            from criatura as c
                join registro as r
                    on c.idCriatura = r.criatura_idCriatura
                        where r.usuario_idUsuario = ${historico}
                            group by periodo, Usuario 
                                order by periodo limit ${limite_linhas}`;


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasCriaturas(historico) {
    var instrucaoSql = `SELECT 
    nome as criatura
    FROM criatura
    WHERE id = ${historico}
    ORDER BY id DESC LIMIT 5`;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarUltimasCriaturas
}
