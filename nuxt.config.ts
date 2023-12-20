// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  nitro: {
    preset: "aws-lambda",
    inlineDynamicImports: true,
    serveStatic: true,
  },
  srcDir: 'src',
  css: [
    '~/assets/scss/base.scss',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Mittelbot - Moderation & Utility',
    },
  },
  plugins: [
    '~/plugins/bootstrap.client.ts',
    '~/plugins/fontawesome.ts',
    { src: '@/plugins/aos', mode: 'client' }
  ],
  extensions: ['ts', 'js'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
})
