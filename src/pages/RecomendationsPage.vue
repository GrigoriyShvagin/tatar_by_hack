<template>
  <div class="flex justify-center flex-col items-center">
    <div class="width90 justify-center flex flex-col items-center">
      <div class="flex justify-between w-full">
        <div class="flex">
          <span
            class="cursor-pointer pr-2 pl-2 border-r-2"
            :class="{ activeTextHeader: currentMenu == 'Article' }"
            @click="currentMenu = 'Article'"
            >Статьи</span
          ><span
            class="cursor-pointer pr-2 pl-2 border-r-2"
            :class="{ activeTextHeader: currentMenu == 'Video' }"
            @click="currentMenu = 'Video'"
            >Видео</span
          ><span
            class="cursor-pointer pr-2 pl-2 border-r-2"
            :class="{ activeTextHeader: currentMenu == 'Audio' }"
            @click="currentMenu = 'Audio'"
            >Аудио</span
          >
        </div>
        <div class="flex relative items-center w-6/12 ml-6">
          <input
            type="text"
            placeholder="Су анасы"
            class="flex border-2 border-green rounded-2xl px-2 py-1 outline-none w-11/12"
          />
          <SearchIcon class="absolute right-12 cursor-pointer" />
        </div>
      </div>
      <div class="flex flex-col justify-center items-center w-full mt-5">
        <div class="activeTextHeader text-2xl w-full text-left">Статьи</div>
        <div class="text-gray text-xl w-full text-left mt-3x">С чего начать</div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchIcon from "@/components/UI/icons/SearchIcon.vue";
export default {
  name: "RecomendationsPage",
  components: { SearchIcon },
  data: () => ({
    currentMenu: "Article",
  }),
};
</script>

<style></style>
