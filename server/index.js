require('dotenv').config()
const express = require('express') 
const massive = reqire('massive')
const controller = require('./controller')

const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express()

app.use(express.json())

// const baseUrl = ''
// app.get()
// app.post()
// app.put() <-- not listed in plans
// app.delete() <-- not listed in plans

const port = 4000
app.listen(port, () => {
    console.log(`Server lsitening on port ${port}!!!!`)
})