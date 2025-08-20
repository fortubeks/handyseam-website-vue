import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/HomePage.vue";
import PrivacyPolicy from "../views/PrivacyPolicyPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/privacy-policy",
      name: "privacy-policy",
      component: PrivacyPolicy,
    },
  ],
});

export default router;
