import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import './index.css'
import VueNumber from "vue-number-animation";
import Aos from "aos";
import 'aos/dist/aos.css'
const app = createApp(App);
app.use(VueNumber);
app.use(router);

Aos.init();
app.mount("#app");
