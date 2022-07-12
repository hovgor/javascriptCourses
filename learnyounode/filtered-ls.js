const fs = require('fs');
const path = require('path');



function filterExt(dir, ext){
    fs.readdir(dir, (err, files) => {
        if (err)
          console.log(err);
        else {
          files.forEach(file => {
            if (path.extname(file) == '.' + ext)
              console.log(file);
              return file;
          })
        }
      })
}
filterExt(__dirname, 'md');



