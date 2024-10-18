
require('dotenv').config()
const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = prozess.env.BACK_PORT || 3000


const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3000)    