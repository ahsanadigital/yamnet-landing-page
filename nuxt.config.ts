// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    '~/assets/scss/bootstrap/bootstrap.scss',
  ],

  modules: [
    'nuxt3-leaflet',
    'nuxt-icon',
    '@nuxtjs/google-fonts',
    'nuxt-svgo',
    '@nuxt/image',
  ],

  googleFonts: {
    families: {
      Inter: true,
      Poppins: true,
      'JetBrains Mono': true,
    },
    display: 'swap',
    subsets: 'greek',
    preconnect: true,
    preload: true,
    useStylesheet: true,
    prefetch: true,
    download: true,
    base64: true,
    inject: true,
    overwriting: true
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
					@import "bootstrap/scss/functions";
					@import "~/assets/scss/bootstrap/_variables.scss";
					@import "~/assets/scss/bootstrap/_variables-dark.scss";
					`,
        }
      }
    }
  }
});
