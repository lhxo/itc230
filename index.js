const http = require("http");
const data = require("./data");

http.createServer((req,res) => {
    const path = req.url.toLowerCase();

    switch(path) {
        case '/':
            const FV = data.getAll();
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(`Welcome to the market we have ${FV.length} fruits and vegetables!`); //fixed to ES6
        break;
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Hello my name is Christopher. I am studying to become a web developer. I want to create websites and web applications to help connect communities. ');
        break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Not found');
        break;
    }
}).listen(process.env.PORT || 3000);