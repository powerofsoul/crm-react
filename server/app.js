const express = require('express')
const routes = require('./routes/')
const mongoose = require('mongoose')

const app = express()
const router = express.Router()

const url = process.env.MONGODB_URI || "mongodb://localhost:27017"
const port = 9000

try {
    mongoose.connect(url)    
} catch (error) {
    console.log(error)
}

routes(router)
app.use('/api/', router)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))