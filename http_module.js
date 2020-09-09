const http = require('http');

const server = http.createServer((req, res) => {
   if(req.url === '/'){
       res.write('Hello World')
       res.end()
   }else{
       res.write('Not a Valid URL !!! ')
       res.end()
   }
})

server.listen(3000)
console.log('Server Is running on port 3000')