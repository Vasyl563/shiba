import {createI18n} from "vue-i18n";
import {defineNuxtPlugin} from "#app";

import en from "~/locales/en.json";
import ua from "~/locales/ua.json";

export default defineNuxtPlugin(({vueApp}) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    fallbackLocale: "en",
    locale: "en",
    messages: {
      en,
      ua,
    },
  });

  // @ts-ignore
  vueApp.use(i18n);
});
