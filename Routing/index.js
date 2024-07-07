import http from 'http'

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // res.end('<h1>Home page </h1>')
    res.writeHead(200, 'OK', { 'content-type': 'text/html' })
    res.end("<a href='/about'>about</a>")
  } else if (req.url === '/about') {
    res.writeHead(200, 'OK', { 'content-type': 'text/html' })
    res.end('<h1>about page</h1>')
  } else {
    res.writeHead(404, 'BAD', { 'content-type': 'text/html' })
    res.end('<h1> 404 Error </h1>')
  }
})

server.listen(8000, () => console.log('it is routing'))
