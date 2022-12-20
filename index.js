const http = require('http');
const fs = require('fs')


const hostname = '127.0.0.1';
const port = 3000;


//Cria um novo arquivo 
fs.writeFile('ex.txt', 'texto exemplo', (err) =>{
    if(err) throw err; 
    console.log('o arquivo foi criado com sucesso!')
})

//Cria um novo arquivo ou insere mais conteúdo caso já exista um arquivo com tal nome
fs.appendFile('ex.txt', '\noutro conteúdo', (err) =>{
    if(err) throw err;
    console.log('arquivo alterado com sucesso')
})


const server = http.createServer((req,res) => {

    if (req.url == '/jops'){
    fs.readFile('index.html', (err, data ) =>{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })

    }else{return res.end();}
})

server.listen(port, hostname,() =>{ console.log('servidor rodando')})