var database = require("../database/config");

function buscarUltimasMedidas(historico, limite_linhas) {

    var instrucaoSql = `SELECT
        count(c.nome) as quantidade,
        date_format(r.dtRegistro, '%m/%Y') as periodo,
        r.usuario_idUsuario as Usuario
            FROM criatura as c
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
            FROM criatura as c
                join registro as r
                    on c.idCriatura = r.criatura_idCriatura
                        where r.usuario_idUsuario = ${historico}
                            group by periodo, Usuario 
                                order by periodo limit 12`;


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasCriaturas(historico) {
    var instrucaoSql = `SELECT
    c.nome as criatura,
    u.idUsuario as usuario
        FROM registro as r
            join criatura as c
                on r.criatura_idCriatura = c.idCriatura
                    join usuario as u
                        on u.idUsuario = r.usuario_idUsuario
                            where u.idUsuario = ${historico}
                                ORDER BY r.criatura_idCriatura DESC LIMIT 5`;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}
function buscarCriaturasVistas(historico) {
    var instrucaoSql = `SELECT
        ifnull(max(totalUsuario), 0) as totalUsuario,
        ${historico} as usuario
            FROM criaturaUsuario
                where usuario_idUsuario = ${historico}`;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarTotal(historico) {
    var instrucaoSql = `SELECT 
    count(nome) as totalCriatura
        FROM criatura`;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarUltimasCriaturas,
    buscarCriaturasVistas,
    buscarTotal
}
