import { URL } from 'url'

const myURL = new URL('https://www.example.com:8000/p/q/a/h?query=string#hash')

console.log(myURL.host)
console.log(myURL.hash)
console.log(myURL.hostname)
console.log(myURL.href)
console.log(myURL.password)
console.log(myURL.port)
console.log(myURL.protocol)
console.log(myURL.searchParams)

//both work same
console.log(myURL.toString())
console.log(myURL.toJSON())
