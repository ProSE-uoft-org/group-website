import { z } from "zod";

// in dev mode, no custom prefix, in order to properly load
const baseUrl = z.string().regex(/\/.*/, 'A prefix base url should start with a slash /').default('/').parse(process.env.BASE_URL);

export default defineNuxtConfig({
  ssr: true,
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
  ],
  app: {
    // https://nuxt.com/docs/api/nuxt-config#baseurl
    // or use NUXT_APP_BASE_URL=/~huakunshen/ npm run generate
    baseURL: baseUrl,
  },
  runtimeConfig: {
    public: {
      baseURL: baseUrl
    }
  },
});
