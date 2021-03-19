const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')
const connection = require('./knexfile').development
const database = require('knex')(connection)
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(cors())
//makes sure body is parsed from json when its given as a request
app.use(express.json())

app.get('/drawings', (_, response) => {
    database('drawings')
        .then(drawings => response.send(drawings))
})

app.post('/drawings', (request, response) => {
    const drawing  = request.body

    database('drawings')
        .insert(drawing)
        .returning('*')
        .then(drawing => response.send(drawing))
})

app.listen(port, () => console.log(`listening at port ${port}`))