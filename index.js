const express = require('express')
const app = express()
const port = 4000
require('dotenv').config()
const bodyParser = require('body-parser')
const connection = require('./knexfile').development
const database = require('knex')(connection)
const cors = require('cors')

const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

const s3 = new aws.S3({
    apiVersion: "2012-10-17",
    region: process.env.S3_BUCKET_REGION,
    credentials: {
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
        accessKeyId: process.env.S3_ACCESS_KEY_ID
    }
});

const upload = multer({
    storage: multerS3({
        s3, // The s3 instance from above
        // The name of your S3 bucket
        bucket: process.env.S3_BUCKET_NAME,
        key: (request, file, next) => {
            // This names the file. This example prepends the
            // UNIX timestamp to original name of the file,
            // which helps with duplicate file names
            next(null, `images/${Date.now()}_${file.originalname}`);
        }
    })
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())

app.post("/upload", upload.single("image"), (request, response) => {
    response.json({data: request.file.location});
    image = request.file.location;
    database('drawings')
    .insert(drawing)
    .returning('*')
    .then(drawing => response.send(image))
});

app.get('/drawings', (_, response) => {
    database('drawings')
        .then(drawings => response.send(drawings))
})

app.get('/drawings/:id', (request, response) => {
    database('drawings')
    .where({id: request.params.id})
    .then(drawing => response.json(drawing))
})

app.post('/drawings', (request, response) => {
    const drawing  = request.body

    database('drawings')
        .insert(drawing)
        .returning('*')
        .then(drawing => response.send(drawing))
})

app.delete('/drawings/:id', (request, response) => {
    database('drawings')
    .delete()
    .where({id: request.params.id})
    .returning('*')
    .then(drawing => console.log("deleted"))
})

app.listen(port, () => console.log(`listening at port ${port}`))