<template>
  <div class="flex justify-center width100">
    <div class="width90 flex justify-between items-center py-6">
      <LogoIcon />
      <div class="flex justify-between text-xl">
        <router-link to="/main">
          <p
            class="px-2 border-header border-r-2 cursor-pointer"
            @click="currentContent = 'main'"
            :class="{ activeTextHeader: currentContent == 'main' }"
          >
            Главная
          </p>
        </router-link>
        <router-link to="/content">
          <p
            class="px-2 cursor-pointer"
            @click="currentContent = 'content'"
            :class="{ activeTextHeader: currentContent == 'content' }"
          >
            Контент
          </p>
        </router-link>
      </div>
      <button
        type="button"
        class="bttn"
        @click="dialogVisible = true"
        v-if="!isLoggedIn"
      >
        Регистрация
      </button>
      <router-link v-else :to="`/user/${userInfo?.id}`">
        <LoginIcon />
      </router-link>
      <LoginMenu v-model:show="dialogVisible" />
    </div>
  </div>
</template>

<script>
import LoginMenu from "./LoginMenu.vue";
import { LogoIcon, LoginIcon } from "@/components/UI";
import { useAuthStore } from "../store/AuthStore";
import { useUserStore } from "../store/UserStore";
export default {
  name: "HeaderSection",
  components: { LogoIcon, LoginMenu, LoginIcon },
  data() {
    return {
      //stores
      authStore: useAuthStore(),
      userStore: useUserStore(),
      //stores
      user: {},
      currentContent: "main",
      dialogVisible: false,
    };
  },
  methods: {
    removeItem() {
      localStorage.removeItem("token");
    },
    getUserInfo() {
      if (this.isLoggedIn) {
        this.userStore.getUserInfoToken();
      }
    },
  },
  computed: {
    isLoggedIn() {
      return this.authStore.isLoggedIn;
    },
    userInfo() {
      return this.userStore.userInfo;
    },
  },
  mounted() {
    this.getUserInfo();
  },
};
</script>

<style lang="scss" scoped></style>
