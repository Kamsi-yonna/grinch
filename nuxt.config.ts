// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // pages: true,

  // ssr: true,

  devServer: {
    port: 3002,
  },

  app: {
    head: {
      link: [],
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  css: [],
  modules: [],
  components: [],
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
    },
  },
});
