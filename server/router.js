// Para as mensagens em tempo real, é criado o router.
const express = require('express');
const router = express.Router();

// O que o servidor faz quando, na página /, houver um GET request.
router.get('/', (request, response) => {
    response.send('servidor executando...');
});

module.exports = router;