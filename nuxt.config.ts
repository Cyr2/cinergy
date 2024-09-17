// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@formkit/auto-animate',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@nuxt/eslint'
  ],
  css: ["@/assets/scss/global.scss"],
})
