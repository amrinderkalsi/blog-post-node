// npm init (To initialize the node project)
// npm install <package name> (To install any package)
// npm start (to start the application)
// npm run dev (to start the application and also monitor new changes)

const http = require('http');
const fs = require('fs');
const home = fs.readFileSync('./index.html');
const about = fs.readFileSync('./about.html');
const contact = fs.readFileSync('./contact.html');
const notfound = fs.readFileSync('./notfound.html');

const server = http.createServer((req, res) => {
    console.log('req.url: ', req.url);
    if (req.url === '/about') {
        res.writeHead(200, {
            'Content-Type': 'application-json'
        })
        res.end(JSON.stringify({
            id: 4
        }));
    } else if (req.url === '/') {
        res.end(home);
    } else if (req.url === '/contact') {
        res.end(contact);
    } else {
        res.writeHead(404)
        res.end(notfound);
    }
});

server.listen(3000);