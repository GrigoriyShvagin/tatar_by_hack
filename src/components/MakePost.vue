<template>
  <div
    class="flex justify-center items-center flex-column top-0 bottom-0 right-0 left-0 bg_gray fixed z-50"
    v-if="show"
  >
    <form
      class="flex justify-between flex-col bg-white w-3/5 p-12"
      @submit.prevent=""
    >
      <div class="flex justify-between">
        <div class="activeTextHeader text-2xl">Создать пост</div>
        <close-icon class="" @click.stop="closeMethod" />
      </div>
      <div class="flex">
        <div class="w-20 rounded-full overflow-hidden">
          <img src="/icons/avatar.png" alt="" />
        </div>
        <div class="ml-4 text-xl">{{ this.$props.user.name }}</div>
      </div>
      <input
        type="text"
        placeholder="Заголовок"
        class="padding w-2/5 px-4 py-2 rounded-2xl mt-4 border-2 border-gray bg-gray outline-none"
        v-model="textHeader"
        required
      />
      <textarea
        type="text"
        placeholder="Текст поста..."
        class="padding w-full h-20 px-4 py-2 rounded-2xl mt-4 border-2 border-gray bg-gray outline-none resize-none"
        v-model="textContent"
        minlength="20"
      />
      <div class="flex justify-between mt-4">
        <div class="flex items-center">
          <button class="bttn" ref="bttnUpload" @click="onUpload">
            Отправить
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { useUserStore } from "@/store/UserStore";
import CloseIcon from "./UI/icons/CloseIcon.vue";

export default {
  components: { CloseIcon },
  data: () => ({
    textHeader: "",
    textContent: "",
    fileToUpload: null,
    userStore: useUserStore(),
  }),
  name: "MakePostMenu",
  props: {
    show: { type: Boolean, default: false },
    user: { default: {} },
  },
  methods: {
    closeMethod() {
      this.$emit("update:show", false);
    },
    onFileSelected(event) {
      this.fileToUpload = event.target.files[0];
    },
    onUpload() {
      this.userStore
        .makeNewPost(this.textContent, this.textHeader, this.isTat)
        .then((resp) => {
          if (resp.status == 200) {
            this.$refs.bttnUpload.textContent = "Отправлено";
            this.$refs.bttnUpload.classList.add("uploaded");
          }
        });
    },
  },
  computed: {
    isTat() {
      if (this.$route.query.lang == "tat") {
        return 1;
      } else {
        return 0;
      }
    },
  },
};
</script>

<style>
.uploaded {
  background: #70c42e !important;
}
.border-gray {
  border-color: #5e5e5e4d;
}
.bg-gray {
  background-color: #f6f6f6;
}
</style>
