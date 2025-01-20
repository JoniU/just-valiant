// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false, // Disable server-side rendering
  app: {
    baseURL: '/', // Replace <repository-name> with the name of your GitHub repository
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
      ],
    },
  },
  image: {
    imagekit: {
      baseURL: 'https://ik.imagekit.io/justvaliant/'
    }
  },
  nitro: {
    preset: 'github_pages', // Ensure static site generation
    prerender: {
      routes: [
        '/_ipx/_/images/blognesery.svg',
        '/_ipx/_/images/kennelliitto.svg',
        '/_ipx/_/images/olivia-piirros.svg'
      ],
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/content', '@nuxt/image'],
  ui: {
    colorMode: false,
  },
  css: ['~/assets/css/main.css'],
})