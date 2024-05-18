<template>
  <div class="flex justify-center flex-col items-center relative">
    <p class="absolute activeTextHeader text-9xl top-1 leftToText">МИРАС</p>
    <div class="flex w-full justify-center items-center">
      <img src="/icons/Card.png" width="180px" class="z-10" />
    </div>

    <div
      class="flex justify-center flex-col items-center mt-5 relative width90"
    >
      <div class="flex justify-between w-full">
        <div class="flex [&>*]:w-12 [&>*]:px-2">
          <ArrowsIcon class="border-r-2 border-header" /><FilterIcon />
        </div>
        <div class="flex relative items-center w-4/5 ml-6">
          <input
            type="text"
            placeholder="Су анасы"
            class="flex border-2 border-header rounded-2xl px-2 py-1 outline-none w-11/12"
          />
          <SearchIcon class="absolute right-24 cursor-pointer" />
        </div>
        <div class="[&>*]:w-10 [&>*]:px-2 flex">
          <SavedIcon class="border-r-2 border-header" />
          <LikeIcon class="w-12" />
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-center flex-col items-center relative mt-10">
    <div class="flex width90 flex-col items-center">
      <div class="flex justify-between items-center w-full">
        <p class="text-3xl">С чего начать</p>
        <p class="flex text-xl items-center text-gray">
          Смотреть все <ArrowRight class="mx-4" />
        </p>
      </div>
      <div class="flex flex-col">
        <div v-for="item in userFeed" :key="item.id" class="flex"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "@/store/AuthStore";
import { useFeedStore } from "@/store/FeedStore";

import {
  //С чего начать start
  ArrowRight,
  //с чего начать end
  FilterIcon,
  ArrowsIcon,
  SearchIcon,
  SavedIcon,
  LikeIcon,
} from "@/components/UI";
export default {
  data() {
    return { authStore: useAuthStore(), feedStore: useFeedStore() };
  },
  methods: {},
  computed: {
    userFeed() {
      return this.feedStore.userFeed;
    },
  },
  mounted() {
    this.feedStore.getUserFeed();
  },
  name: "MainPage",
  components: {
    //С чего начать start
    ArrowRight,
    //С чего Начать end
    LikeIcon,
    ArrowsIcon,
    FilterIcon,
    SearchIcon,
    SavedIcon,
  },
};
</script>

<style lang="scss" scoped>
.w-12 {
  width: 48px !important;
}
.text-current {
  color: var(--main-color);
}
.leftSet {
  z-index: -1;
  left: 80%;
  top: 65%;
}
.rightSet {
  z-index: -1;
  right: 83%;
  transform: rotateY(180deg);
  top: 65.25%;
}
.left-cur {
  left: 15%;
}
.right-cur {
  right: 15%;
  bottom: 20%;
}
.border {
  border: 3px solid var(--main-color);
}
</style>
