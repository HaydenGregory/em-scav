import { createApp } from "vue";
import BootstrapVue3 from "bootstrap-vue-3";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import Notifications from "@kyvg/vue3-notification";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

import App from "./App.vue";
import router from "./router";

createApp(App)
  .use(router)
  .use(BootstrapVue3)
  .use(Notifications)
  .component("VueDatePicker", VueDatePicker)
  .mount("#app");
