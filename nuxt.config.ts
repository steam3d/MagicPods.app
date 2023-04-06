// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'MagicPods',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Add a little magic to your AirPods✨'
        }
      ],      
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@400;600;700&display=swap',
        },
        { rel: 'icon', type: 'image/svg', href: '/favicon.svg' },
      ],
    },
  },
  modules: [
    [
      'unplugin-vue-inspector/nuxt',
      {
        enabled: true,
        toggleButtonVisibility: 'always',
      },
    ],
  ],
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
