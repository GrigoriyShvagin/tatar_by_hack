<template>
  <div class="flex justify-center flex-col items-center">
    <div class="justify-center flex flex-col items-center width90">
      <div class="flex justify-between w-full">
        <div class="flex">
          <router-link
            :to="{
              path: '/user/' + currentPost?.person?.id,
              query: { lang: this.$route.query.lang },
            }"
            ><img src="/icons/avatar.png" width="50px" alt="" class="mr-4"
          /></router-link>
          <div class="flex flex-col">
            <div class="font-medium mb-2">{{ currentPost.person?.name }}</div>
            <div class="text-gray text-xs">100k подписчиков</div>
          </div>
        </div>
        <div class="flex items-center justify-between w-24">
          <share-icon class="w-6" /><SubscribeIcon class="w-6" /><LikeIcon
            class="w-6"
          />
        </div>
      </div>
      <div class="flex w-full flex-col">
        <div class="text-2xl font-semibold mt-8">{{ currentPost.title }}</div>
        <div class="text-gray mt-4" v-if="this.$route.query.lang == 'tat'">
          {{ currentPost.tatarText }}
        </div>
        <div class="text-gray mt-4" v-else>{{ currentPost.text }}</div>
      </div>
      <div class="flex mt-4">
        <div class="w-1/2" v-if="currentPost?.video">
          <video width="90%" controls class="mr-5 rounded-xl">
            <source
              :src="
                `http://91.186.197.219:8080/` + currentPost.video.split('/')[3]
              "
              type="video/mp4"
            />
          </video>
        </div>
        <div class="w-1/2" v-if="currentPost?.image">
          <img
            width="80%"
            :src="
              'http://91.186.197.219:8080/' + currentPost.image.split('/')[3]
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useFeedStore } from "@/store/FeedStore";
import { ShareIcon, LikeIcon, SubscribeIcon } from "@/components/UI";
export default {
  name: "PostPage",
  components: { ShareIcon, SubscribeIcon, LikeIcon },
  data: () => ({ feedStore: useFeedStore() }),
  methods: {
    getCurrentPost() {
      this.feedStore.getCurrentPost(this.$route.params.id);
    },
  },
  computed: {
    currentPost() {
      console.log(this.feedStore.currentPost);
      return this.feedStore.currentPost;
    },
  },
  mounted() {
    this.getCurrentPost();
  },
};
</script>

<style></style>
