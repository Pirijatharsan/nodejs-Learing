// blocking code
// console.log('Start')
// alert('Blocking')
// console.log('end')

// non-blocking code

// console.log('start')
// setTimeout(() => {
//   alert('non-Blocking')
// }, 1000)
// console.log('end')

// without call-back

import fs from 'fs'

console.log('start')
let data = fs.readFileSync('text.txt')
console.log(data.toString())

console.log('end')

// with callback
console.log('start')
fs.readFile('text.txt', 'utf-8', (err, res) => {
  err ? console.log(err) : console.log(res)
})
console.log('end')
