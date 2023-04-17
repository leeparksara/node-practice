const http = require('http')

const app = http.createServer((request, response) => {
    response.write('Hejsan svejsan')

    response.end()
})

app.listen({ port: 3000 }, () => {
    console.log('Server startad på localhost:3000')
})
