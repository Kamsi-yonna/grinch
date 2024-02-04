// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,

  spaLoadingTemplate: false,

  devServer: {
    port: 3002,
  },

  app: {
    head: {
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.ico" },
        { href: "/webclip.png", rel: "apple-touch-icon" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Montserrat:300,600|PT+Serif&display=swap",
        },
      ],
      script: [
        {
          src: "https://js.stripe.com/v3/",
          type: "text/javascript",
        },
      ],
      htmlAttrs: {
        lang: "en",
      },
    },
  },

  css: ["~/public/assets/css/main.css"],
  modules: [],
  components: ["~/components/partials", "~/components"],
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
    },
  },
});
