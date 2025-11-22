var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:historico", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:historico", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/ultimas-criaturas/:historico", function (req, res) {
    medidaController.buscarUltimasCriaturas(req, res);
})

router.get("/criaturas-vistas/:historico", function (req, res) {
    medidaController.buscarCriaturasVistas(req, res);
})

router.get("/criaturas-total/:historico", function (req, res) {
    medidaController.buscarTotal(req, res);
})

router.get("/lista-criatura/:historico", function (req, res) {
    medidaController.buscarNome(req, res);
})

router.get("/descricao-criatura/:historico", function (req, res) {
    medidaController.buscarRegistro(req, res);
})

router.get("/quantidade-criatura/:historico", function (req, res) {
    medidaController.buscarQuantidade(req, res);
})

module.exports = router;