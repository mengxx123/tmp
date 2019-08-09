// const SCEL = require('scel')
const SCEL = require('./SCEL')

SCEL.parseFile('test.scel').then(dict => {
  console.log(
    dict.name,
    dict.description,
    dict.words.length
  )
})
