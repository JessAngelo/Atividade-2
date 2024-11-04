const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Exemplo de rota
app.get('/', (req, res) => {
    res.send('Olá, Vercel!');
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
