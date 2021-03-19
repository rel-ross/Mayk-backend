const express = require('express')
const app = express()
const port = 4000

app.get('/', (request, response)=> {
    response.json({message: "made it"})
})

app.listen(port, () => console.log(`listening at port ${port}`))