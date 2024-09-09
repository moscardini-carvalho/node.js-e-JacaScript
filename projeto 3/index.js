

const http = require('http');
const hostname = "127.0.0.1";
const port = 3000;
const fs = require('fs');

const server = http.createServer((req, res) => {

    if (req.url == '/danki') {

        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        })

    } else {
        return res.end('Deu erro');
    }

})

server.listen(port, hostname, () => {
    console.log("Servidor está ativo e funcionando!!!");
})