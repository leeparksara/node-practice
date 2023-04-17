const http = require('http')

const app = http.createServer((request, response) => {
    response.write('Hello my friends')

    response.end()
})

app.listen({ port: 3001 }, () => {
    console.log('Server startad på localhost:3001')
})
