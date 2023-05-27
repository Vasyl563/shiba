import {defineNuxtPlugin} from "#app";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

export default defineNuxtPlugin(({vueApp}) => {
  // @ts-ignore
  vueApp.use(ElementPlus);
});
