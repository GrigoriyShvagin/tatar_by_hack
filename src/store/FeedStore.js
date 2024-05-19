import { defineStore } from "pinia";
import axios from "axios";

const VUE_APP_API_URL = `${process.env.VUE_APP_API_URL}`;

export const useFeedStore = defineStore("feed", {
  state: () => {
    return {
      token: localStorage.getItem("token") || "",
      feed: {},
      currentPostState: {},
    };
  },
  getters: {
    userFeed: (state) => state.feed,
    currentPost: (state) => state.currentPostState,
  },
  actions: {
    async getUserFeed() {
      const headers = { Authorization: this.token };
      const result = await axios.get(`${VUE_APP_API_URL}/feed/posts`, {
        headers: headers,
      });
      this.$state.feed = result.data;
      return result;
    },
    async setLikeToPost({ id, likes }) {
      const headers = { Authorization: this.token };
      const result = await axios.patch(
        `${VUE_APP_API_URL}/feed/posts/${id}`,
        {
          likes: likes + 1,
        },
        { headers: headers }
      );
      return result;
    },
    async getCurrentPost(id) {
      const headers = { Authorization: this.token };
      const result = await axios.get(`${VUE_APP_API_URL}/feed/posts/${id}`, {
        headers: headers,
      });
      this.$state.currentPostState = result.data;
      return result;
    },
  },
});
