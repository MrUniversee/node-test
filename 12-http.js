const http = require('http')

const server = http.createServer((req, resp) => {
  if (req.url === '/') {
    resp.end('Welcome to our homepage')
    return
  }
  if (req.url === '/about') {
    resp.end('Welcome to our about page')
    return
  }
  resp.end(
    `
    <h1>Oops</h1>
    <p>Can't find the page you are looking for</p>
    <a href='/'>back home</a>
    `
  )
})

server.listen(5000)
