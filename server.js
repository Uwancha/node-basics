const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
    fs.readFile("./pages/index.html", (err, data) => {
        if (err) {
            console.log(err)
            res.end();
        } else {
            res.end(data)
        }
    })
})

app.get('/about', (req, res) => {
    fs.readFile("./pages/about.html", (err, data) => {
        if (err) {
            console.log(err)
            res.end();
        } else {
            res.end(data)
        }
    })
})

app.get('/contact', (req, res) => {
    fs.readFile("./pages/contact.html", (err, data) => {
        if (err) {
            console.log(err)
            res.end();
        } else {
            res.end(data)
        }
    })
})

app.get('*', (req, res) => {
    fs.readFile('./pages/404.html', (err, data) => {
      if (err) {
        console.log(err);
        res.end();
      } else {
        res.statusCode = 404;  
        res.end(data);
      }
    });
});


// The old one without express
/* 
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
*/

app.listen(3000) 