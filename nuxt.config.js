export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt-tutorial",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/firebase"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["nuxt-buefy"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  srcDir: "src",

  firebase: {
    config: {
      apiKey: process.env.NUXT_ENV_FIREBASE_API_KEY,
      authDomain: process.env.NUXT_ENV_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NUXT_ENV_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NUXT_ENV_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NUXT_ENV_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NUXT_ENV_FIREBASE_APP_ID
    },
    services: {
      auth: {
        persistence: "local",
        ssr: true,
        initialize: {
          onAuthStateChangedMutation: "ON_AUTH_STATE_CHANGED_MUTATION"
        }
      }
    }
  },

  workbox: {
    importScripts: ["/firebase-auth-sw.js"],

    dev: process.env.NODE_ENV == "development"
  }
};
