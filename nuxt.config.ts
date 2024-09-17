// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@formkit/auto-animate',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/ui',
  ],
  css: ["@/assets/scss/global.scss"],
})