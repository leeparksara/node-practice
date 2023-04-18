//

const express = require('express')
const app = express()
app.get('/', (request, response) => {
    response.send('first')
})

app.listen(3000, () => {
    console.log('server started')
})

// Address and query paramets
// Address paramets uses with request.params and :
// Query paramets uses with request.query
//Both query and address paramets are a way to send information to the web service / server
