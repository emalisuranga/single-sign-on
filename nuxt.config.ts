// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    'class-validator': 'class-validator/cjs/index.js',
    "./runtimeConfig": "./runtimeConfig.browser"
  },
  vite: {
    define: {
      "window.global": {}
    }
  },
  css: ["~/assets/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [
    '~/plugins/amplify',
  ],
  modules: [
    'nuxt-vue3-google-signin'
  ],
  googleSignIn: {
    clientId: '581624144888-iesgqb1efn3ieal4bkf2rp2q4uicrqqd.apps.googleusercontent.com',
  }
})
