var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.get("/testar", function (req, res) {
    res.status(200).send("Rota do quiz funcionando!");
});

router.post("/salvar", function (req, res) {
    quizController.salvarResultado(req, res);
});

router.get("/resultado/:fkUsuario", function (req, res) {
    quizController.buscarResultado(req, res);
});

module.exports = router;