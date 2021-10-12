const { createProxyMiddleware } = require("http-proxy-middleware")
const express = require("express")
const server = express()
const LOCAL_HOST = "localhost"
const API_SERVICE_URL = "https://webflux.josdem.io/categories/en"
const PORT = 3000

server.get("/", (req, res) => {
  res.send("This proxy server wich proxies request to a third party service")
})

server.use("/proxy", (req, res, next) => {
  console.log(`request: ${req.headers.market}`)
  console.log(`response: ${res}`)
  next()
})

server.use(
  "/proxy",
  createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
      [`^/proxy`]: "",
    },
  })
)

server.listen(PORT, LOCAL_HOST, () => {
  console.log(`Example app listening at ${LOCAL_HOST}:${PORT}`)
})
