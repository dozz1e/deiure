import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  head: {
    titleTemplate: '%s',
    title: 'De Iure Abogados - Justicia a tu Alcance',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
      { name: 'googlebot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
      { hid: 'description', name: 'description', content: 'Estudio de abogados que provee asesorías y soluciones legales, de forma cercana y personalizada en temas de divorcios, despidos y alza de planes en Isapres' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'De Iure Abogados - Justicia a tu Alcance' },
      { property: 'og:description', content: 'Estudio de abogados que provee asesorías y soluciones legales, de forma cercana y personalizada en temas de divorcios, despidos y alza de planes en Isapres' },
      { property: 'og:url', content: 'https://www.deiureabogados.cl/' },
      { property: 'og:locale', content: 'es_CL' },
      { property: 'og:site_name', content: 'De Iure Abogados' }
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/images/favicon.svg' },
      { rel: 'canonical', href: 'https://www.deiureabogados.cl/' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/fuentes.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-ssr-cache',
    'nuxtjs-mdi-font'
    // '@nuxtjs/google-analytics'
  ],

  // googleAnalytics: {
  //   id: process.env.UA-126263425-1, // Use as fallback if no runtime config is provided
  // },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: false,
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  cache: {
    useHostPrefix: false,
    pages: [
      '/',
    ],
    store: {
      type: 'memory',
      max: 100,
      ttl: 60
    }
  }
}
