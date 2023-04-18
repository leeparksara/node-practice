//avancera assignment part1 ( 1.1, 1.2)
// The web service must receive calls via port 8080, port 8080/foo, 8080/baz, 8080/other
// response with statuscode 404
/*const http = require('http')

const app = http.createServer((request, response) => {
    if (request.url === '/') {
        response.write(' Hejsan svejsan')
    } else if (request.url === '/foo') {
        response.write('bar')
    } else if (request.url === '/baz') {
        response.write('qux')
    } else if (request.url === '/other') {
        response.statusCode = 404
        response.write('Not Found')
    } else {
        response.statusCode = 404
        response.write('Not Found')
    }
    response.end()
})

app.listen({ port: 8080 }, () => {
    console.log('Server startad på localhost:8080./')
})
 */

// Find out which type of request we doing , ex get request
/*const http = require('http')
const app = http.createServer((request, response) => {
    response.write(`Du gjorde ett ${request.method}anrop`)
    response.end()
})

app.listen({ port: 3000 }, () => {
    console.log('server started')
}) */
