<template>
  <div class="flex justify-center flex-col items-center relative">
    <p class="absolute activeTextHeader text-9xl top-1 leftToText">ИНАУТЫҢ</p>
    <div class="flex w-full justify-center items-center">
      <img src="/icons/Card.png" width="180px" class="z-10 mr-7" />
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
      <div class="flex flex-col justify-center w-full">
        <div
          v-for="item in userFeed"
          :key="item.id"
          class="flex items-center justify-center flex-col w-3/6 ml-14"
        >
          <div class="flex items-center justify-between w-full mb-2">
            <div class="flex items-center">
              <div
                class="flex justify-center w-8 h-8 rounded-full overflow-hidden"
              >
                <img src="/icons/ded.png" alt="" />
              </div>
              <div class="flex flex-col justify-center ml-2 text-xs">
                <div class="">{{ item.person.name }}</div>
                <div class="">{{ filteredData(item.createdAt) }}</div>
              </div>
            </div>
            <div class="flex justify-between">
              <div
                class=""
                v-for="(genre, index) in item.genres"
                :key="genre.id"
              >
                <div
                  class="px-4 py-2 text-white bg-green rounded-xl text-xs mr-2"
                  v-if="index < 2"
                >
                  #{{ genre }}
                </div>
              </div>
              <SubscribeIcon />
            </div>
          </div>
          <div
            class="my-2"
            v-if="this.$route.query.lang == 'tat' && item.tatarText"
          >
            <router-link
              :to="{
                path: '/post/' + item.id,
                query: { lang: this.$route.query.lang },
              }"
            >
              <div class="text-xs">{{ item.tatarText }}</div>
              <div
                class="text-left text-xs activeTextHeader"
                v-if="item.tatarText?.length > 190"
              >
                <span class="border-b border-green">Читать далее...</span>
              </div>
            </router-link>
          </div>
          <div class="my-2" v-else>
            <router-link
              :to="{
                path: '/post/' + item.id,
                query: { lang: this.$route.query.lang },
              }"
            >
              <div class="text-xs">{{ item.text.slice(0, 190) }}</div>
              <div
                class="text-left text-xs activeTextHeader"
                v-if="item.text.length > 190"
              >
                <span class="border-b border-green">Читать далее...</span>
              </div>
            </router-link>
          </div>
          <div
            class="flex items-center flex-col"
            v-if="item.image || item.video"
          >
            <video width="100%" controls class="mr-5 rounded-xl">
              <source
                :src="`http://91.186.197.219:8080/` + item.video?.split('/')[3]"
                type="video/mp4"
              />
            </video>
            <div class="flex justify-between px-5">
              <img
                :src="`http://91.186.197.219:8080/` + item.image?.split('/')[3]"
                alt=""
                class="rounded-xl"
                width="20%"
              />
              <img
                :src="`http://91.186.197.219:8080/` + item.image?.split('/')[3]"
                alt=""
                class="rounded-xl"
                width="20%"
              />
              <img
                :src="`http://91.186.197.219:8080/` + item.image.split('/')[3]"
                alt=""
                class="rounded-xl"
                width="20%"
              />
              <img
                :src="`http://91.186.197.219:8080/` + item.image.split('/')[3]"
                alt=""
                class="rounded-xl"
                width="20%"
              />
            </div>
          </div>
          <div class="flex justify-between w-full mb-4 mt-2">
            <div class="flex">
              <div
                class="flex items-center px-2 border-2 commentSectionBorder rounded-xl bg-gray color-red text-left cursor-pointer"
                @click="likeMethod(item.id, item.likes), (item.likes += 1)"
              >
                {{ item.likes }}
                <LikeIcon class="w-4 h-4 color-red cursor-pointer" />
              </div>
              <div
                class="flex items-center justify-center px-2 border-2 commentSectionBorder rounded-xl bg-gray activeTextHeader"
              >
                {{ item.comments.length }} <CommentIcon class="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "@/store/AuthStore";
import { useFeedStore } from "@/store/FeedStore";

import {
  //С чего начать start
  //с чего начать end
  FilterIcon,
  ArrowsIcon,
  SearchIcon,
  SavedIcon,
  SubscribeIcon,
  LikeIcon,
  CommentIcon,
} from "@/components/UI";
export default {
  data() {
    const VUE_FILES_API_URL = `${process.env.VUE_FILES_API_URL}`;
    return {
      authStore: useAuthStore(),
      feedStore: useFeedStore(),
      VUE_FILES_API_URL,
    };
  },
  methods: {
    likeMethod(id, likes) {
      this.feedStore.setLikeToPost({ id: id, likes: likes });
      return likes + 1;
    },
    filteredData(data) {
      const postData = data.filter((elem, index) => {
        return index < 4;
      });
      if (postData[1].toString.length) {
        const newValue = "0" + postData[1];
        postData[1] = newValue;
      }
      return postData.join(",");
    },
    filteredText(text) {
      let newText = "";
      if (text.length > 190) {
        newText = text.slice(0, 190);
      }
      return newText;
    },
  },
  computed: {
    userFeed() {
      return this.feedStore.userFeed;
    },
  },
  mounted() {
    this.feedStore.getUserFeed();
    this.$route.query.lang = "tat";
  },
  name: "MainPage",
  components: {
    //С чего начать start
    //С чего Начать end
    LikeIcon,
    ArrowsIcon,
    FilterIcon,
    SearchIcon,
    SavedIcon,
    SubscribeIcon,
    CommentIcon,
  },
};
</script>

<style lang="scss" scoped>
.color-red {
  color: #c62f34;
}
.bg-gray {
  background: #f6f6f6;
}
.commentSectionBorder {
  border-color: #5e5e5e4d;
}
.border-green {
  border-color: var(--main-color);
}
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
