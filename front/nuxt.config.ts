// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  eslint: {
    config: {
      stylistic: {
        indent: "tab",
        semi: false,
        quotes: "double",
      },
    },
  },

  modules: [
    "@formkit/auto-animate",
    "@nuxtjs/color-mode",
    "@nuxt/image",
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxt/scripts",
  ],

  css: ["@/assets/scss/global.scss"],
});
