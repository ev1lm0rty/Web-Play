// Sample httpserver
const http = require('http')

const server = http.createServer((req , res)=>{
  console.log(`[+] ${req.method} : ${req.url}`)
  res.writeHead(200, {'content-type':'morty'})
  res.end('home-page')
})

server.listen(5000)
