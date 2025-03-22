export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/color-mode', '@element-plus/nuxt', '@nuxtjs/google-fonts'],
  elementPlus: {
    icon: 'ElIcon',
    importStyle: 'scss',
    themes: ['dark'],
  },
  googleFonts: {
    families: {
      Roboto: [400, 500, 700],
    },
    display: 'swap',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: `@use "@/assets/scss/element/index.scss" as element;`,
        },
      },
    },
  },
  css: ['~/assets/scss/index.scss'],
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
})
