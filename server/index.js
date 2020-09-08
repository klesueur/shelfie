require('dotenv').config()
const express = require('express') 
const massive = require('massive')
const controller = require('./controller')

const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express()

app.use(express.json())
const port = 4000

// const baseUrl = ''
app.get('/api/inventory', controller.getProducts)
// app.post()
// app.put() <-- not listed in plans
// app.delete() <-- not listed in plans

massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false, }
}).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('DB Ready')
})


app.listen(port, () => {
    console.log(`Server listening on port ${port}!!!!`)
})

