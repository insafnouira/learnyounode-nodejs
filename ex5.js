const fs=require('fs')
const path = require('path');

const files= process.argv[2]
const end = '.' + process.argv[3]



fs.readdir(files, function (err, data) {
  if (err) {
       return console.log(err)
  }
 data.forEach( function (file) {

  if (path.extname(file) === end){
  	console.log(file)
}

  })
 	
})