import "@mdi/font/css/materialdesignicons.css";
import "@/assets/styles/vuetify.scss";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
  });
  app.vueApp.use(vuetify);
});
