const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')
const connection = require('./knexfile').development
const database = require('knex')(connection)
const cors = require('cors')
const router = express.Router();
const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

const s3 = new aws.S3({
    apiVersion: "2012-10-17",
    region: process.env["us-east-2"],
    credentials: {
        secretAccessKey: process.env.aec187SZgAMAKxvUHlz9hoHRcwvxnzx23Xvq3pw,
        accessKeyId: process.env.AKIAVTHVA37UVSDLKY4R
    }
});

const upload = multer({
    storage: multerS3({
        s3, // The s3 instance from above
        // The name of your S3 bucket
        bucket: process.env["mayk-capstone"],
        key: (request, file, next) => {
            // This names the file. This example prepends the
            // UNIX timestamp to original name of the file,
            // which helps with duplicate file names
            next(null, `files/${Date.now()}_${file.originalname}`);
        }
    })
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())

router.post("/upload", upload.single("file"), (request, response) => {
    // Return the URL the file was uploaded to- optionally, store it
    // in a database first.
    response.json({data: request.file.location});
});

module.exports = router;




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