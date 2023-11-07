import { defineNuxtConfig } from "nuxt"
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import { configStyleImportPlugin } from './vite/plugins/styleImport';
import path from "path"

const pathResolve = (dir: string) => path.resolve(process.cwd(), '.', dir);

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/tailwindcss",
    "@intlify/nuxt3",
    "floating-vue/nuxt",
    "./modules/fullpage/fullpage.module"
  ],
  intlify: {
    localeDir: "locales",
    vueI18n: {
      legacy: false,
      locale: "en",
      fallbackLocale: "en",
      globalInjection: true
    }
  },
  runtimeConfig: {
    apiProxyTarget: "https://cross-chain.authright-test.newtouch.com",
    dashboardsProxyTarget: "http://61.172.179.6:30312",
    hamsterProxyTarget: "http://61.172.179.6:30312",
    articlesProxyTarget: "https://media.c.alpha.hamsternet.io",
    // contractProxyTarget: "http://61.172.179.6:30317",
    contractProxyTarget: "https://media.c.alpha.hamsternet.io",
    navbarProxyTarget:"http://61.172.179.6:30317",
    navbarContentProxyTarget:"http://61.172.179.6:30317",

    // hamsterProxyTarget: "http://183.66.65.207:8003",
    public: {
      hamsterClientPackage: {
        version: 'v1.3.3',
        windowsLink: 'https://github.com/hamster-shared/hamster-client/releases/download/v1.3.2/hamster-client-v1.3.2-windows-amd64.zip',
        macLink: 'https://github.com/hamster-shared/hamster-client/releases/download/v1.3.3/hamster-client-v1.3.3-darwin-amd64.dmg',
        linuxLink: 'https://github.com/hamster-shared/hamster-client/releases/download/v1.3.0/hamster-client-v1.3.0-linux-amd64.tar.gz'
      },
      hamsterProviderPackage: {
        version: 'v1.3.3',
        windowsLink: 'https://github.com/hamster-shared/hamster-provider/releases/download/v1.3.3/hamster-provider-v1.3.3-windows-amd64.zip',
        macLink: 'https://github.com/hamster-shared/hamster-provider/releases/download/v1.3.3/hamster-provider-v1.3.3-darwin-amd64.dmg',
        linuxLink: 'https://github.com/hamster-shared/hamster-provider/releases/download/v1.3.3/hamster-provider-v1.3.3-linux-amd64.tar.gz'
      }
    }
  },
  vite: {
    resolve: {
      alias: {
        "web3": pathResolve("node_modules/web3/dist/web3.min.js"),
      }
    },
    plugins: [
      configStyleImportPlugin(),
    ],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
        }
      }
    },
    build: {
      rollupOptions: {
        plugins: [nodePolyfills()]
      },
      transpile: [
        ["ant-design-vue", "@ant-design/icons-vue", 'swiper', 'vue-awesome-swiper', 'vue3-carousel-3d']
      ],
    },
    optimizeDeps: {
      esbuildOptions: {
        // Node.js global to browser globalThis
        define: {
          global: 'globalThis',
        },
        // Enable esbuild polyfill plugins
        plugins: [
          NodeGlobalsPolyfillPlugin({ buffer: true, process: true }),
          NodeModulesPolyfillPlugin(),
        ],
      },
    },
  },
  // plugins: [
  //   { src: '@/plugins/vue-seamless-scroll', ssr: false },
  // ]
})
