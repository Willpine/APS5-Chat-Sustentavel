// Para as mensagens em tempo real, é criado o router.
const express = require('express');
const router = express.Router();

// Essa mensagem é mostrada toda vez que vamos para a página DO SERVIDOR
// Se ela aparecer, o servidor está em execução.
router.get('/', (request, response) => {
    response.send('servidor executando...');
});

module.exports = router;