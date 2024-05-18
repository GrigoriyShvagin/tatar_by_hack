import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

import "./assets/styles.css";

const pinia = createPinia();
const app = createApp(App);

app.component("QuillEditor", QuillEditor);
app.use(pinia).use(router).mount("#app");
