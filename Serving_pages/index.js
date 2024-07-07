import http from 'http'
import fs from 'fs'
import { error } from 'console'

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, 'OK', { 'content-type': 'text/html' })
    fs.readFile('./public/home.html', (error, data) => {
      if (error) throw error
      res.end(data)
    })
  } else if (req.url === '/about') {
    res.writeHead(200, 'OK', { 'content-type': 'text/html' })
    fs.readFile('./public/about.html', (error, data) => {
      if (error) throw error
      res.end(data)
    })
  } else {
    res.writeHead(404, 'BAD', { 'content-type': 'text/html' })
    res.end('<h1>404 page not found</h1>')
  }
})

server.listen(8000, () => console.log('server up !'))
