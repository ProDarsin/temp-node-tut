const http = require('http');
const serve = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('hello welcame to first page')
    }
    if (req.url === '/about') {
        res.end('here is our short histroy')
    }
    res.end(`<h1>oops </h1>
  <p>sorry we dont have this pageu are looking for</p>
  <a href="/">back home</a>
  `)
})
serve.listen(5000)