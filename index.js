const { createProxyMiddleware } = require("http-proxy-middleware")
const express = require("express")
const server = express()
const LOCAL_HOST = "localhost"
const API_SERVICE_URL = "https://webflux.josdem.io/categories/en"
const PORT = 3000

server.get("/en", (req, res) => {
  res.send("Hello World!")
})

server.use("", (req, res, next) => {
  console.log(`request: ${req}`)
  next()
})

server.use(
  "/adobe_mock",
  createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
      [`^/adobe_mock`]: "",
    },
  })
)

server.listen(PORT, LOCAL_HOST, () => {
  console.log(`Example app listening at ${LOCAL_HOST}:${PORT}`)
})
