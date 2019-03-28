
const mymodule = require('./modulEx6.js')


const filter = process.argv[3]
const files = process.argv[2]

mymodule(files, filter, function (err, list) {
  if (err) {
    return console.log(err)
  }

  list.forEach(function (file) {
    console.log(file)
  })
})