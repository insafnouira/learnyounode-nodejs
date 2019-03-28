const fs=require('fs')
const path = require('path');


module.exports = function (files, filter, callback) {

  fs.readdir(files, function (err, data) {
    if (err) {
      return callback(err)
    }

   data = data.filter(function (file) {

      return path.extname(file) === '.' + filter

    })

    callback(null, data)
  })
}