const { createProxyMiddleware } = require("http-proxy-middleware")
const express = require("express")
const server = express()
const LOCAL_HOST = "localhost"
const API_SERVICE_URL = "http://localhost:8080/"
const PORT = 3000

server.get("/info", (req, res) => {
  res.send("This proxy server wich proxies request to a third party service")
})

server.use(
  "/users",
  createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: false,
    onProxyReq: (proxyReq, req, res) => {
      console.log(req)
    }
  })
)

server.listen(PORT, LOCAL_HOST, () => {
  console.log(`Example app listening at ${LOCAL_HOST}:${PORT}`)
})
