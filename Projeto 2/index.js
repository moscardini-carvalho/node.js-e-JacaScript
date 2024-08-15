const http = require('http');
const fs = require('fs');
const hostname = "127.0.0.1"
const port = 3000;

fs.writeFile('Hello.txt','Texto para teste de conteúdo dentro do arquivo txt',function(err){
    if(err) throw err;
    console.log('O arquivo foi criado com sucesso!!!');
})

fs.appendFile('Outro Hello.txt','\nOutro arquivo de Hello World !!!',function(err){
    if(err) throw err;
    console.log('Outro arquivo criado com sucesso!!');
})

const server = http.createServer((req,res) => {

    if(req.url == '/HelloWorld'){

    fs.readFile('index.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    })

    } else{
        return res.end();
}

})

server.listen(port,hostname,() => {
    console.log("Servidor está funcionando!!!");
})