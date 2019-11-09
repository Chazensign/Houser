require("dotenv").config()
const express = require("express")
const { SERVER_PORT, CONNECTION_STRING } = process.env
const ctrl = require("./controllers/controller")
const massive = require("massive")

const app = express()
app.use(express.json())

app.post('/api/houses', ctrl.addHouse)
app.get('/api/houses', ctrl.getHouses)
app.delete('/api/houses/:id', ctrl.deleteHouse)

massive(CONNECTION_STRING).then(dataBaseConnection => {
  app.set('db', dataBaseConnection)
  app.listen(SERVER_PORT, () => console.log(`Self destruct in ${SERVER_PORT}`))
})