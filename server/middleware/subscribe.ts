import { createProxyMiddleware } from "http-proxy-middleware"

const { subscribeProxyTarget } = useRuntimeConfig()
const apiProxy = subscribeProxyTarget && createProxyMiddleware("/api/subscribe/**", {
  target: subscribeProxyTarget,
  changeOrigin: true,
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