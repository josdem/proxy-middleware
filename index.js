const { createProxyMiddleware } = require("http-proxy-middleware")
const express = require("express")
const httpProxy = require('http-proxy');
const server = express()
const LOCAL_HOST = "localhost"
const API_SERVICE_URL = "http://localhost:8080/"
const PORT = 3000

server.get("/info", (req, res) => {
  res.send("This proxy server wich proxies request to a third party service")
})

const proxy = httpProxy.createServer({
  target:'http://localhost:3000/users'
});

server.use(
  "/users",
  createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: false
  })
)

proxy.on('proxyReq', function (proxyReq, req, res) {
  console.log('RAW Response from the target', JSON.stringify(proxyReq.headers, true, 2));
  console.log(req)
})

server.listen(PORT, LOCAL_HOST, () => {
  console.log(`Example app listening at ${LOCAL_HOST}:${PORT}`)
})
