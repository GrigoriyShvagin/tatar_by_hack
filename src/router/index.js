import { createRouter, createWebHistory } from "vue-router";

import MainPage from "@/pages/MainPage.vue";

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
    alias: "/main",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
