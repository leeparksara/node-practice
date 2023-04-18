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

// Give response as a statu scode 200 in a header
// Send different message depending on the address that user will visit
// Send with json data
// Send with html content to our website from node
const http = require('http')
const Port = process.env.Port || 5001

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })

    //Add routes
    // better way to handle url

    const url = req.url
    if (url === '/profile') {
        res.write('<h1>Welcome to your profile</h1>')
        res.end()
    } else if (url === '/shipment') {
        // send json data , dummy payload (payload = big amount of data like a package)

        const payload = {
            address: {
                street: 'Richard street',
                city: ' Stockholm'
            }
        }
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.write(JSON.stringify(payload))
    } else {
        res.write('You have reached another page')
    }
}).listen(Port, () => {
    console.log(`Server is fine and its running on port ${Port}`)
})
