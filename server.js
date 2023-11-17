const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    
    let path = "./pages/";

    switch (req.url) {
        case "/":
            path += "index.html";
            res.statusCode = 200;
            break;
        case "/about":
            path += "about.html";
            res.statusCode = 200;
            break
        case "/":
            path += "contact.html";
            res.statusCode = 200;
            break
        default: 
            path += "404.html";
            res.statusCode = 404;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
            res.end();
        } else {
            res.end(data)
        }
    })
    
})

server.listen(3000, 'localhost', () => {
    console.log('Listening to port');
})