// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { 
    enabled: true 
  },
  css: [
    '~/assets/styles/main.css'
  ],
  imports: {
    dirs: [
      'app/api/*'
    ]
  },
  runtimeConfig: {
    MONGO_URI: process.env.MONGO_URI
  },
  nitro: {
    plugins: ["@/server/db/index.ts"]
  }
})
