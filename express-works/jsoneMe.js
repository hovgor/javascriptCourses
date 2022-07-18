const express = require('express');
const fs = require('fs');
const app = express();

app.get('/books', function(req, res){
    const fileName = process.argv[3];
    fs.readFile(fileName, function (e, data){
       try {
         if(e){
             throw new Error(e);
         }
         const obj = JSON.parse(data);
         res.json(obj);
       } catch (e) {
        res.sendStatus(500);
        throw e;
       }
    })
})



app.listen(process.argv[2]);