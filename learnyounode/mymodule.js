const fs = require('fs');
const path = require('path');

module.exports = function filterDir(dir, ext, callback){
    fs.readdir(dir, (err, files) => {
        if (err)
          return callback(err);
        else {
          files = files.filter((file) => {
            if (path.extname(file) === '.' + ext)
              return file;
          })
          callback(null, files);
        }
      })
}


// 'use strict'
//     const fs = require('fs')
//     const path = require('path')
    
    // module.exports = function (dir, filterStr, callback) {
    //   fs.readdir(dir, function (err, list) {
    //     if (err) {
    //       return callback(err)
    //     }
    
    //     list = list.filter(function (file) {
    //       return path.extname(file) === '.' + filterStr
    //     })
    
    //     callback(null, list)
    //   })
    // }