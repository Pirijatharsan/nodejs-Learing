//creating sever
import http from 'http'

//create our sever
const sever = http.createServer((req, res) => {
  res.statusCode = 404
  res.statusMessage = 'good'
  res.setHeader('Content-type', 'text/html')
  res.write('<h1>Hello from nodejs</h1>')
})

sever.listen(8000, () => console.log('Sever up'))
