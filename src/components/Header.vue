<template>
  <div class="flex justify-center width100">
    <div class="width90 flex justify-between items-center py-6">
      <LogoIcon />
      <div class="flex justify-between text-xl">
        <router-link
          :to="{ path: '/main', query: { lang: this.$route.query.lang } }"
          v-if="currentLang == 'tat'"
        >
          <p
            class="px-2 border-header border-r-2 cursor-pointer"
            @click="currentContent = 'main'"
            :class="{ activeTextHeader: currentContent == 'main' }"
            v-if="this.$route.query.lang == 'tat'"
          >
            Баш
          </p>
        </router-link>
        <router-link
          :to="{ path: '/main', query: { lang: this.$route.query.lang } }"
          v-else
        >
          <p
            class="px-2 border-header border-r-2 cursor-pointer"
            @click="currentContent = 'main'"
            :class="{ activeTextHeader: currentContent == 'main' }"
            v-if="this.$route.query.lang == 'rus'"
          >
            Главная
          </p>
        </router-link>
        <router-link
          :to="{
            path: '/recomendations',
            query: { lang: this.$route.query.lang },
          }"
          v-if="currentLang == 'rus'"
        >
          <p
            class="px-2 cursor-pointer"
            @click="currentContent = 'Recomendations'"
            :class="{ activeTextHeader: currentContent == 'Recomendations' }"
          >
            Рекомендации
          </p>
        </router-link>
        <router-link
          :to="{
            path: '/recomendations',
            query: { lang: this.$route.query.lang },
          }"
          v-else
        >
          <p
            class="px-2 cursor-pointer"
            @click="currentContent = 'Recomendations'"
            :class="{ activeTextHeader: currentContent == 'Recomendations' }"
          >
            Тәкъдимнәр
          </p>
        </router-link>
      </div>
      <div class="flex">
        <TatarLangSvg
          v-if="currentLang == 'tat'"
          @click="currentLangMethod('rus')"
          class="mr-6"
        />
        <RusLangIcon v-else @click="currentLangMethod('tat')" class="mr-6" />
        <button
          type="button"
          class="bttn"
          @click="dialogVisible = true"
          v-if="!isLoggedIn"
        >
          Регистрация
        </button>
        <router-link
          v-else
          :to="{
            path: '/user/' + userInfo?.id,
            query: { lang: this.$route.query.lang },
          }"
        >
          <LoginIcon />
        </router-link>
      </div>
      <LoginMenu v-model:show="dialogVisible" />
    </div>
  </div>
</template>

<script>
import LoginMenu from "./LoginMenu.vue";
import {
  LogoIcon,
  LoginIcon,
  RusLangIcon,
  TatarLangSvg,
} from "@/components/UI";
import { useAuthStore } from "../store/AuthStore";
import { useUserStore } from "../store/UserStore";
export default {
  name: "HeaderSection",
  components: { LogoIcon, LoginMenu, LoginIcon, TatarLangSvg, RusLangIcon },
  data() {
    return {
      //stores
      authStore: useAuthStore(),
      userStore: useUserStore(),
      //stores
      user: {},
      currentLang: "tat",
      currentContent: "main",
      dialogVisible: false,
    };
  },
  methods: {
    removeItem() {
      localStorage.removeItem("token");
    },
    currentLangMethod(str) {
      this.currentLang = str;
      this.$router.push({ path: this.$route.path, query: { lang: str } });
      this.$route.params.lang = str;
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
    currentLangInfo() {
      return this.$route.params.lang;
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
