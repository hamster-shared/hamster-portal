import { createProxyMiddleware } from "http-proxy-middleware"

const { articlesProxyTarget } = useRuntimeConfig()
const apiProxy = articlesProxyTarget && createProxyMiddleware("/JoinMiddleware", {
  target: articlesProxyTarget,
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
