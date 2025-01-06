// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false, // Disable server-side rendering
  app: {
    baseURL: '/just-valiant/', // Replace <repository-name> with the name of your GitHub repository
  },
  nitro: {
    preset: 'github_pages', // Ensure static site generation
    prerender: {
      routes: ['/'
      ], // Ensure the index and other dynamic routes are prerendered
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/content', '@nuxt/image'],
  css: ['~/assets/css/main.css'],
  ui: {
    colorMode: false,
  }
})