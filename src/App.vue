<template>
  <component :is="layout"></component>
</template>

<script>
import AppLayout from "./layouts/AppLayout.vue";
export default {
  name: "App",
  components: { AppLayout },
  computed: {
    layout() {
      return "AppLayout";
    },
  },
};
</script>

<style></style>
