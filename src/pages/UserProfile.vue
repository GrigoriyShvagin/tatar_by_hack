<template>
  <div class="flex justify-center flex-col items-center">
    <div class="flex justify-center width90 mt-12">
      <div class="flex flex-col">
        <img src="/icons/avatar.png" alt="" />
        <div class="text-center">{{ userInfo.name }}</div>
      </div>
    </div>
    <button
      class="bttn rounded-3xl mt-3"
      @click="this.makePostMenu = !this.makePostMenu"
    >
      Создать пост
    </button>
    <MakePost v-model:show="makePostMenu" :user="userInfo" />
  </div>
</template>

<script>
import { useUserStore } from "@/store/UserStore";
import MakePost from "@/components/MakePost.vue";
export default {
  name: "UserProfile",
  data: () => ({ userStore: useUserStore(), makePostMenu: false }),
  components: { MakePost },
  methods: {
    getUserInfoToken() {
      this.userStore.getUserInfoToken();
    },
    getUserInfoId() {
      const id = this.$route.params.id;
      this.userStore.getUserInfoId(id);
    },
  },
  computed: {
    userInfo() {
      return this.userStore.userInfoId;
    },
    userId() {
      return this.$route.params.id;
    },
    checkUserInfo() {
      if (this.userInfo.id == this.userId) {
        return true;
      } else {
        return false;
      }
    },
  },
  mounted() {
    this.getUserInfoToken();
    console.log(this.$route);
    this.getUserInfoId();
  },
};
</script>

<style></style>
