import { defineStore } from "pinia";
import axios from "axios";

const VUE_APP_API_URL = `${process.env.VUE_APP_API_URL}`;

export const useAuthStore = defineStore("auth", {
  state: () => {
    return { status: "", token: localStorage.getItem("token") || "", user: {} };
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
    authStatus: (state) => state.status,
  },
  actions: {
    async login({ email, password }) {
      this.$state.status = "loading";
      try {
        const response = await axios.post(`${VUE_APP_API_URL}/auth/login`, {
          email: email,
          password: password,
        });

        const token = response.data.token;
        this.$state.token = token;
        localStorage.setItem("token", token);
        this.$state.status = "success";

        return response;
      } catch (error) {
        localStorage.removeItem("token");
        this.$state.status = "error";
        throw error;
      }
    },
    async getRegisterCode({ email, status }) {
      this.$state.status = "loading";
      const response = await axios
        .post(`${VUE_APP_API_URL}/auth/send-code`, email, status)
        .catch((error) => {
          this.$state.status = "error";
          throw error;
        });

      return response;
    },

    async checkCode(params) {
      this.$state.status = "loading";

      const response = await axios
        .post(`${VUE_APP_API_URL}/auth/check-code`, params)
        .catch((error) => {
          this.$state.status = "error";
          throw error;
        });

      this.$state.status = "success";
      return response;
    },

    async registration(params) {
      this.$state.status = "loading";

      try {
        const response = await axios.post(
          `${VUE_APP_API_URL}/auth/registration`,
          params
        );

        const token = response.data.token;
        this.$state.token = token;
        this.$state.status = "success";
        localStorage.setItem("token", token);

        return response;
      } catch (error) {
        this.$state.status = "error";
        throw error;
      }
    },
  },
});
