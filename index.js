const express = require("express")
const server = express()
const LOCAL_HOST = "http://localhost"
const API_SERVICE_URL = "https://webflux.josdem.io/categories/en/"
const PORT = 3000

server.get("/", (req, res) => {
  res.send("Hello World!")
})

server.listen(PORT, () => {
  console.log(`Example app listening at ${LOCAL_HOST}:${PORT}`)
})