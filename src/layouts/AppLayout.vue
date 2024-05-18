<template>
  <div class="main">
    <div class="content">
      <HeaderSection />
      <router-view></router-view>
      <footer />
    </div>
  </div>
</template>

<script>
import router from "@/router";
import HeaderSection from "@/components/Header.vue";
export default {
  components: {
    HeaderSection,
  },
  name: "AppLayout",
  computed: {
    check() {
      console.log(router);
      return router;
    },
  },
};
</script>

<style lang="scss" scoped></style>
