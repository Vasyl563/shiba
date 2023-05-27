// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  css: ["@/assets/scss/main.scss"],
  app: {
    head: {
      title: "TEMPLATE",
      meta: [
        {charset: "utf-8"},
        {name: "viewport", content: "width=device-width, initial-scale=1"},
        {hid: "title", name: "title", content: "TEMPLATE"},
        {
          hid: "description",
          name: "description",
          content: "DESCRIPTION HERE",
        },
        {hid: "og:title", property: "og:title", content: "TEMPLATE"},
        {
          hid: "og:description",
          property: "og:description",
          content: "DESCRIPTION HERE",
        },
        // TODO: add OG image and add i18n to OG image
        {
          hid: "og:image",
          property: "og:image",
          content: "https://www.air-tv.net/img/og-image.jpg",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://www.air-tv.net/",
        },
      ],
      link: [
        // eslint-disable-next-line max-len
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap'
        },
        {
          rel: 'icon',
          href: '/favicon.ico'
        }
      ],
    },
  },
  components: {
    global: true,
    dirs: ['~/components/shared']
  },
  modules: [
    "@nuxtjs/tailwindcss",
    'nuxt-swiper',
    "@pinia/nuxt",
    "nuxt-icon",
    "nuxt-icons",
    "@nuxtjs/i18n",
  ],
  tailwindcss: {
    cssPath: "~/assets/scss/tailwind.scss",
  },
});
