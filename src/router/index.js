import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/HomePage.vue";
import PrivacyPolicy from "../views/PrivacyPolicyPage.vue";
import AboutUs from "../views/AboutUsPage.vue";
import FAQ from "../views/FAQPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/faq",
      name: "faq",
      component: FAQ,
    },
    {
      path: "/privacy-policy",
      name: "privacy-policy",
      component: PrivacyPolicy,
    },
    {
      path: "/about-us",
      name: "about-us",
      component: AboutUs,
    },
  ],
});

export default router;
