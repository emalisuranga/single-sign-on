// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

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
    'nuxt-vue3-google-signin',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@pinia/nuxt',
  ],
  googleSignIn: {
    clientId: '581624144888-iesgqb1efn3ieal4bkf2rp2q4uicrqqd.apps.googleusercontent.com',
  },
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
