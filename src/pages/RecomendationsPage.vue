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
        <div class="flex w-full justify-between items-center">
          <div
            class="text-gray text-xl w-full text-left mt-3x flex items-center"
          >
            С чего начать
          </div>
          <ArrowRoundLeft class="" />
          <ArrowRoundLeft class="transformed mb-2" />
        </div>
      </div>
      <div class="flex jusrify-between">
        <div class="flex flex-col relative mr-5">
          <img
            src="/icons/ded.png"
            width="280px"
            height="150px"
            class="rounded-3xl absolute"
          />
          <div class="border-2 rounded-2xl p-4">
            <div class="flex items-center mt-44">
              <img src="/icons/avatar.png" width="40" />
              <div class="text-xs">
                <p>Имя автора</p>
                <p class="">23 апреля в 18:00</p>
              </div>
            </div>
            <div class="activeTextHeader text-xl mt-2">
              Кто это видит тот...
            </div>
            <div class="max-w-60 text-gray font-light text-xs">
              Кто это видет, тот Кто это видет, тот Кто это видет, тот Кто это
              видет, тот ...
            </div>
          </div>
        </div>
        <div class="flex flex-col relative mr-5">
          <img
            src="/icons/ded.png"
            width="280px"
            height="150px"
            class="rounded-3xl absolute"
          />
          <div class="border-2 rounded-2xl p-4">
            <div class="flex items-center mt-44">
              <img src="/icons/avatar.png" width="40" />
              <div class="text-xs">
                <p>Имя автора</p>
                <p class="">23 апреля в 18:00</p>
              </div>
            </div>
            <div class="activeTextHeader text-xl mt-2">
              Кто это видит тот...
            </div>
            <div class="max-w-60 text-gray font-light text-xs">
              Кто это видет, тот Кто это видет, тот Кто это видет, тот Кто это
              видет, тот ...
            </div>
          </div>
        </div>
        <div class="flex flex-col relative mr-5 mb-10">
          <img
            src="/icons/ded.png"
            width="280px"
            height="150px"
            class="rounded-3xl absolute"
          />
          <div class="border-2 rounded-2xl p-4">
            <div class="flex items-center mt-44">
              <img src="/icons/avatar.png" width="40" />
              <div class="text-xs">
                <p>Имя автора</p>
                <p class="">23 апреля в 18:00</p>
              </div>
            </div>
            <div class="activeTextHeader text-xl mt-2">
              Кто это видит тот...
            </div>
            <div class="max-w-60 text-gray font-light text-xs">
              Кто это видет, тот Кто это видет, тот Кто это видет, тот Кто это
              видет, тот ...
            </div>
          </div>
        </div>
      </div>
      <div class="flex jusrify-between">
        <div class="flex flex-col relative mr-5 mb-10">
          <img
            src="/icons/ded.png"
            width="280px"
            height="150px"
            class="rounded-3xl absolute"
          />
          <div class="border-2 rounded-2xl p-4">
            <div class="flex items-center mt-44">
              <img src="/icons/avatar.png" width="40" />
              <div class="text-xs">
                <p>Имя автора</p>
                <p class="">23 апреля в 18:00</p>
              </div>
            </div>
            <div class="activeTextHeader text-xl mt-2">
              Кто это видит тот...
            </div>
            <div class="max-w-60 text-gray font-light text-xs">
              Кто это видет, тот Кто это видет, тот Кто это видет, тот Кто это
              видет, тот ...
            </div>
          </div>
        </div>
        <div class="flex flex-col relative mr-5 mb-10">
          <img
            src="/icons/ded.png"
            width="280px"
            height="150px"
            class="rounded-3xl absolute"
          />
          <div class="border-2 rounded-2xl p-4">
            <div class="flex items-center mt-44">
              <img src="/icons/avatar.png" width="40" />
              <div class="text-xs">
                <p>Имя автора</p>
                <p class="">23 апреля в 18:00</p>
              </div>
            </div>
            <div class="activeTextHeader text-xl mt-2">
              Кто это видит тот...
            </div>
            <div class="max-w-60 text-gray font-light text-xs">
              Кто это видет, тот Кто это видет, тот Кто это видет, тот Кто это
              видет, тот ...
            </div>
          </div>
        </div>
        <div class="flex flex-col relative mr-5 mb-10">
          <img
            src="/icons/ded.png"
            width="280px"
            height="150px"
            class="rounded-3xl absolute"
          />
          <div class="border-2 rounded-2xl p-4">
            <div class="flex items-center mt-44">
              <img src="/icons/avatar.png" width="40" />
              <div class="text-xs">
                <p>Имя автора</p>
                <p class="">23 апреля в 18:00</p>
              </div>
            </div>
            <div class="activeTextHeader text-xl mt-2">
              Кто это видит тот...
            </div>
            <div class="max-w-60 text-gray font-light text-xs">
              Кто это видет, тот Кто это видет, тот Кто это видет, тот Кто это
              видет, тот ...
            </div>
          </div>
        </div>
      </div>
      <div class="flex jusrify-between">
        <div class="flex flex-col relative mr-5 mb-10">
          <img
            src="/icons/ded.png"
            width="280px"
            height="150px"
            class="rounded-3xl absolute"
          />
          <div class="border-2 rounded-2xl p-4">
            <div class="flex items-center mt-44">
              <img src="/icons/avatar.png" width="40" />
              <div class="text-xs">
                <p>Имя автора</p>
                <p class="">23 апреля в 18:00</p>
              </div>
            </div>
            <div class="activeTextHeader text-xl mt-2">
              Кто это видит тот...
            </div>
            <div class="max-w-60 text-gray font-light text-xs">
              Кто это видет, тот Кто это видет, тот Кто это видет, тот Кто это
              видет, тот ...
            </div>
          </div>
        </div>
        <div class="flex flex-col relative mr-5 mb-10">
          <img
            src="/icons/ded.png"
            width="280px"
            height="150px"
            class="rounded-3xl absolute"
          />
          <div class="border-2 rounded-2xl p-4">
            <div class="flex items-center mt-44">
              <img src="/icons/avatar.png" width="40" />
              <div class="text-xs">
                <p>Имя автора</p>
                <p class="">23 апреля в 18:00</p>
              </div>
            </div>
            <div class="activeTextHeader text-xl mt-2">
              Кто это видит тот...
            </div>
            <div class="max-w-60 text-gray font-light text-xs">
              Кто это видет, тот Кто это видет, тот Кто это видет, тот Кто это
              видет, тот ...
            </div>
          </div>
        </div>
        <div class="flex flex-col relative mr-5">
          <img
            src="/icons/ded.png"
            width="280px"
            height="150px"
            class="rounded-3xl absolute"
          />
          <div class="border-2 rounded-2xl p-4">
            <div class="flex items-center mt-44">
              <img src="/icons/avatar.png" width="40" />
              <div class="text-xs">
                <p>Имя автора</p>
                <p class="">23 апреля в 18:00</p>
              </div>
            </div>
            <div class="activeTextHeader text-xl mt-2">
              Кто это видит тот...
            </div>
            <div class="max-w-60 text-gray font-light text-xs">
              Кто это видет, тот Кто это видет, тот Кто это видет, тот Кто это
              видет, тот ...
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchIcon from "@/components/UI/icons/SearchIcon.vue";
import { ArrowRoundLeft } from "@/components/UI";
export default {
  name: "RecomendationsPage",
  components: { SearchIcon, ArrowRoundLeft },
  data: () => ({
    currentMenu: "Article",
  }),
};
</script>

<style>
.transformed {
  transform: rotate(180deg);
}
</style>
