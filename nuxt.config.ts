// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false, // Disable server-side rendering
  app: {
    baseURL: '/<repository-name>/', // Replace <repository-name> with the name of your GitHub repository
  },
  nitro: {
    preset: 'static', // Ensure static site generation
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/content', '@nuxt/image'],
  css: ['~/assets/css/main.css'],
  ui: {
    colorMode: false,
  }
})