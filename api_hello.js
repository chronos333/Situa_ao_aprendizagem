const http = require('http')

const hostname = "127.0.0.1";
const port = 3000;

//funçao para manipular requisiçoes
const requestHandler = (req, res) => {
    //definindo cabeçalho da resposta
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    //definindo a logica da rota
    if (req.url === '/hello' && req.method === "GET") {
        res.end(JSON.stringify({ message: 'Ola, Mundo'}));
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: "Rota  nao encontrada"}));
    }
};

//criando o servidor
const server = http.createServer(requestHandler);

//iniciando o servidor:
server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`)
})