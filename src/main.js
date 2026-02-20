// Vue core
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Global CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/css/LineIcons.3.0.css";
import "@/assets/css/animate.css";
import "@/assets/css/tiny-slider.css";
import "@/assets/css/glightbox.min.css";
import "@/assets/css/main.css";
import "@/assets/css/slider.css";

// Bootstrap JS (includes Popper)
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Mount app
const app = createApp(App);

app.use(router);

app.mount("#app");

// Load theme script once (client-side only)
if (typeof window !== "undefined") {
  import("@/assets/js/main.js")
    .then(() => {
      console.log("Custom main.js loaded");
    })
    .catch((err) => {
      console.error("Failed to load custom main.js", err);
    });
}
