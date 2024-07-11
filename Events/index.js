import EventEmitter from 'events'

// creating instance

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
  console.log(`user is ${name} and the id is ${id}`)
})

customEmitter.emit('response', 'pirijatharsan', 1)
