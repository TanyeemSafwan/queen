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
    MONGO_URI: process.env.MONGO_URI,
    SUPER_ADMIN: process.env.SUPER_ADMIN,
    SUPER_PASSWORD: process.env.SUPER_PASSWORD
  },
  nitro: {
    plugins: ["@/server/db/index.ts"]
  },
  modules: [
    '@pinia/nuxt'
  ]
})
