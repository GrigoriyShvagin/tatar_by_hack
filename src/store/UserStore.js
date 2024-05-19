import { defineStore } from "pinia";
import axios from "axios";

const VUE_APP_API_URL = `${process.env.VUE_APP_API_URL}`;

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      userInfoStateToken: {},
      userInfoStateId: {},
      status: "",
      token: localStorage.getItem("token") || "",
    };
  },
  getters: {
    userInfo: (state) => state.userInfoStateToken,
    userInfoId: (state) => state.userInfoStateId,
  },
  actions: {
    async getUserInfoToken() {
      const headers = { Authorization: this.token };
      const result = await axios.get(`${VUE_APP_API_URL}/user-profile`, {
        headers: headers,
      });
      this.$state.userInfoStateToken = result.data;
      return result;
    },
    async getUserInfoId(id) {
      const headers = { Authorization: this.token };
      const result = await axios
        .get(`${VUE_APP_API_URL}/user-profile/${id}`, {
          headers: headers,
        })
        .catch((error) => {
          throw error;
        });

      this.$state.userInfoStateId = result.data;
      return result;
    },
    async makeNewPost(text, header, isTat) {
      const genres = ["ANIMALS"];
      const category = "AUTHOR";
      const headers = { Authorization: this.token };
      const result = await axios.post(
        `${VUE_APP_API_URL}/user-profile/posts/add-post`,
        {
          category: category,
          genres: genres,
          text: text,
          title: header,
          isTatar: isTat,
        },
        { headers: headers }
      );
      return result;
    },
  },
});
