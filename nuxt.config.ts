// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      title: 'OnePage Website',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'OnePage website with Nuxt.js' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      htmlAttrs: {
        lang: 'hu',
      },
    }
  },

  css: [
    '@/assets/css/main.css'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2025-01-10',
  modules: ['@nuxt/image', 'nuxt-swiper'],
  build: {
    transpile: ['consola'], // Biztosítja, hogy a consola csomagot a Nuxt fordítsa le
  },
})