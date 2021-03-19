const express = require('express')
const app = express()
const port = 4000
const connection = require('./knexfile').development
const database = require('knex')(connection)
const cors = require('cors')

app.use(cors())
//makes sure body is parsed from json when its given as a request
app.use(express.json())

app.get('/drawings', (_, response) => {
    database('drawings')
        .then(drawings => response.send(drawings))
})

app.get('/', (request, response)=> {
    response.json({message: "made it"})
})

app.listen(port, () => console.log(`listening at port ${port}`))