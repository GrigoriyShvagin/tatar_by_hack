import { defineStore } from "pinia";
import axios from "axios";

const VUE_APP_API_URL = `${process.env.VUE_APP_API_URL}`;

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      userInfoState: {},
      status: "",
      token: localStorage.getItem("token") || "",
    };
  },
  getters: { userInfo: (state) => state.userInfoState },
  actions: {
    async getUserInfoToken() {
      const headers = { Authorization: this.token };
      const result = await axios.get(`${VUE_APP_API_URL}/user-profile`, {
        headers: headers,
      });
      this.$state.userInfoState = result.data;
      return result;
    },
  },
});
