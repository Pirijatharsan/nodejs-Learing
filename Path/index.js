import path from 'path'

// console.log(Path.basename('d:\\Dev\\nodejs-HuXn\\Path\\index.js'))

//basename
console.log('hello')
console.log(path.basename('d:\\Dev\\nodejs-HuXn\\Path\\index.js'))
console.log(path.basename('d:\\Dev\\nodejs-HuXn\\Path\\index.js', '.js'))

console.log(path.dirname('d:\\Dev\\nodejs-HuXn\\Path\\index.js'))

console.log(path.extname('d:\\Dev\\nodejs-HuXn\\Path\\index.js'))

console.log(path.join('C', 'Dev', 'Nodejs', 'path'))

console.log(path.normalize('d:\\Dev\\nodejs-HuXn\\Path\\index.js'))

console.log(path.parse('d:\\Dev\\nodejs-HuXn\\Path\\index.js'))

console.log(path.parse('d:\\Dev\\nodejs-HuXn\\Path\\index.js').base)
console.log(path.parse('d:\\Dev\\nodejs-HuXn\\Path\\index.js').ext)
console.log(path.parse('d:\\Dev\\nodejs-HuXn\\Path\\index.js').root)
