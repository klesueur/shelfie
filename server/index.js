const express = require('express') 
const controller = require('./controller')

const app = express()

app.use(express.json())

const port = 4000
app.listen(port, () => {
    console.log(`Server lsitening on port ${port}!!!!`)
})