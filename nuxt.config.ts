import { z } from "zod";

// in dev mode, no custom prefix, in order to properly load
const baseUrl = z.string().regex(/\/.*/, 'A prefix base url should start with a slash /').default('/').parse(process.env.BASE_URL);

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
  gtag: {
    // The Google Analytics 4 property ID to use for tracking
    id: "G-887SRCJHXZ",
    // Additional configuration for the Google Analytics 4 property
    config: {
      page_title: "UT-SE-Group-Website",
    },
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        // Without this, search will not work
        // https://github.com/nuxt-themes/docus/issues/996
        verbatimModuleSyntax: false
      }
    }
  }
});
