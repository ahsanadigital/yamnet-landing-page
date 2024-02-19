// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    '~/assets/scss/bootstrap/bootstrap.scss',
		'@fortawesome/fontawesome-svg-core/styles.css',
  ],

	app: {
		head: {
			script: [
				{ src: 'https://kit.fontawesome.com/4ac369a501.js', crossorigin: 'anonymous' },
			]
		}
	},

  modules: [
    'nuxt3-leaflet',
    'nuxt-icon',
    '@nuxtjs/google-fonts',
    'nuxt-svgo',
    '@nuxt/image',
		'nuxt-swiper',
  ],

  googleFonts: {
    families: {
      Inter: true,
      Gabarito: true,
      Poppins: [400, 500, 600, 700, 800, 900],
      'JetBrains Mono': true,
    },
    display: 'swap',
    subsets: 'greek',
		download: true,
  },

	
  image: {
    format: ['webp'],
    quality: 80,
		inject: true,
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
