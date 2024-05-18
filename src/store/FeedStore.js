import { defineStore } from "pinia";
import axios from "axios";

const VUE_APP_API_URL = `${process.env.VUE_APP_API_URL}`;

export const useFeedStore = defineStore("feed", {
  state: () => {
    return { token: localStorage.getItem("token") || "", feed: {} };
  },
  getters: { userFeed: (state) => state.feed },
  actions: {
    async getUserFeed() {
      const headers = { Authorization: this.token };
      const result = await axios.get(`${VUE_APP_API_URL}/feed/posts`, {
        headers: headers,
      });
      this.$state.feed = result.data;
      return result;
    },
  },
});
