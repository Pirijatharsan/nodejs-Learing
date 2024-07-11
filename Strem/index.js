import { createReadStream } from 'fs'

// const strem = createReadStream('./data.txt', { highWaterMark: 90000 })

const strem = createReadStream('./data.txt', { encoding: 'utf8' })

strem.on('data', (data) => {
  console.log(data)
})
