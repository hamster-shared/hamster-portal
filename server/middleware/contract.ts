import { createProxyMiddleware } from "http-proxy-middleware"

const { contractProxyTarget } = useRuntimeConfig()
const apiProxy = contractProxyTarget && createProxyMiddleware("/api/contact/**", {
  target: contractProxyTarget,
  changeOrigin: true,
  // pathRewrite: path => path.replace(/^\/api/, "")
})

export default defineEventHandler(async ({ req, res }) => {
  if (!apiProxy) {
    return
  }

  await new Promise<void>((resolve, reject) => {
    const next = (err?: unknown) => err ? reject(err) : resolve()
    apiProxy(req, res, next)
  })
})
