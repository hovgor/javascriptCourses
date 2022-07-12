const http = require('http')
const url = process.argv[2]
let body = ''

const getRes = (callback) => {
  http.get(url, (response) => {
    response.on('data', (chunk) => {
      body += chunk
    })
    response.on('end', () => {
      return callback()
    })
  })
}

getRes(() => {
  console.log(body.length)
  console.log(body)
})