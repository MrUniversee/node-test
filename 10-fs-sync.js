const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const result = readFileSync('./content/result-sync.txt', 'utf-8')
writeFileSync('./content/first.txt', `This is the first text file `, {
  flag: 'a',
})
writeFileSync('./content/second.txt', `This is the second text file`)
console.log('done with this one')
console.log('starting a new task')
