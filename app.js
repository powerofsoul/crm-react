const express = require('express')
const routes = require('./routes/')

const app = express()
const router = express.Router()
const port = 80

routes(router)
app.use('/', router)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))