import { createRouter, createWebHistory } from "vue-router";

import MainPage from "@/pages/MainPage.vue";
import RecomendationsPage from "@/pages/RecomendationsPage.vue";
import UserProfile from "@/pages/UserProfile.vue";
import PostPage from "@/pages/PostPage.vue";

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
    alias: "/main/",
  },
  {
    path: "/recomendations/",
    name: "RecomendationsPage",
    component: RecomendationsPage,
  },
  {
    path: "/user/:id",
    name: "UserProfile",
    component: UserProfile,
  },
  {
    path: "/post/:id",
    name: "PostPage",
    component: PostPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
