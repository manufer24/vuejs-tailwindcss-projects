import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../components/TicTac.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../components/ContactForm.vue"),
    },
  ],
});

export default router;
