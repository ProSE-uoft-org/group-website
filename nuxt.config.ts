export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: "@nuxt-themes/docus",
  devtools: { enabled: true },
  ssr: true,
  modules: [
    // Remove it if you don't use Plausible analytics
    // https://github.com/nuxt-modules/plausible
    // '@nuxtjs/plausible',
    "@nuxt/content",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "nuxt-gtag",
  ],
  // app: {
  //   baseURL: '/~prose'
  // },
  // or use NUXT_APP_BASE_URL=/~huakunshen/ npm run generate
  gtag: {
    // The Google Analytics 4 property ID to use for tracking
    id: "G-887SRCJHXZ",
    // Additional configuration for the Google Analytics 4 property
    config: {
      page_title: "UT-SE-Group-Website",
    },
  },
});
