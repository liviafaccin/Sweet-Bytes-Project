var express = require("express");
var router = express.Router();

// Importa o controller que acabamos de criar
var quizController = require("../controllers/quizController");

// Rota de teste (pode deixar por enquanto)
router.get("/testar", function (req, res) {
    res.status(200).send("✅ Rota do quiz funcionando!");
});

// Rota real — recebe os dados do quiz via POST
// O front-end vai acessar: POST /quiz/salvar
router.post("/salvar", function (req, res) {
    quizController.salvarResultado(req, res);
});

router.get("/resultado/:fkUsuario", function (req, res) {
    quizController.buscarResultado(req, res);
});

module.exports = router;