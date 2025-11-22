var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {

    const limite_linhas = 12;

    var historico = req.params.historico;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas(historico, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(200).json([])
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMedidasEmTempoReal(req, res) {

    var historico = req.params.historico;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(historico).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasCriaturas(req, res) {

    var historico = req.params.historico;

    console.log(`Recuperando criaturas vistas`);

    medidaModel.buscarUltimasCriaturas(historico).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(200).json([])
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas criaturas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });

}
function buscarCriaturasVistas(req, res) {

    var historico = req.params.historico;

    console.log(`Recuperando total de criaturas vistas pelo usuario`);

    medidaModel.buscarCriaturasVistas(historico).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas criaturas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarTotal(req, res) {

    var historico = req.params.historico;

    console.log(`Recuperando total de criaturas vistas pelo usuario`);

    medidaModel.buscarTotal(historico).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas criaturas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarNome(req, res) {

    var historico = req.params.historico;

    console.log(`Recuperando total de criaturas vistas pelo usuario`);

    medidaModel.buscarNome(historico).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas criaturas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarRegistro(req, res) {

    var historico = req.params.historico;

    console.log(`Recuperando total de criaturas vistas pelo usuario`);

    medidaModel.buscarRegistro(historico).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas criaturas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarQuantidade(req, res) {

    var historico = req.params.historico;

    console.log(`Recuperando total de criaturas vistas pelo usuario`);

    medidaModel.buscarQuantidade(historico).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas criaturas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarUltimasCriaturas,
    buscarCriaturasVistas,
    buscarTotal,
    buscarNome,
    buscarRegistro,
    buscarQuantidade
}