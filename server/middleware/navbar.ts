import { createProxyMiddleware } from "http-proxy-middleware"

const { navbarProxyTarget } = useRuntimeConfig()
const apiProxy = navbarProxyTarget && createProxyMiddleware("/api/navbar/**", {
  target: navbarProxyTarget,
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