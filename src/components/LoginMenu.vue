<template>
  <div
    class="flex justify-center items-center flex-column top-0 bottom-0 right-0 left-0 bg_gray fixed z-50"
    v-if="show"
  >
    <form
      class="flex justify-between"
      v-if="currentMenu === 'login'"
      @submit.prevent=""
    >
      <img
        src="/icons/RegistrationMenuImg.png"
        alt=""
        width="300"
        height="500"
      />
      <div
        class="flex justify-center items-center bg-white currentWidth currentHeight"
      >
        <div class="flex flex-col w-full justify-center items-center">
          <div class="flex justify-between w-3/4 items-center mb-12">
            <span class="activeTextHeader text-2xl font-medium">Вход </span>
            <CloseIcon
              class="w-7 h-6 cursor-pointer"
              @click.stop="closeDialog"
            />
          </div>
          <div class="flex flex-col w-3/4 items-center">
            <div
              class="w-full activeTextHeader text-base font-light mb-2"
              ref="emailInputText"
            >
              Адрес электронной почты
            </div>
            <input
              type="email"
              v-model="emailLog"
              required
              ref="emailInputLog"
              class="w-full border-main border-2 py-3 px-4 rounded-3xl outline-none mb-5"
            />
            <div
              class="w-full activeTextHeader text-base font-light mb-2"
              ref="passwordInputText"
            >
              Пароль
            </div>
            <input
              ref="passwordInputLog"
              type="password"
              required
              v-model="passwordLog"
              class="w-full border-main border-2 py-3 px-4 rounded-3xl outline-none"
            />
            <button
              type="submit"
              class="w-full border-main border-2 py-3 px-4 rounded-3xl font-medium items-center text-white bg-green mt-10"
              @click.stop="onLogin"
            >
              Войти
            </button>
            <div class="flex justify-between w-2/3 mt-4">
              <p
                class="text-xs outline-1 colorLink border-b borderLink w-2/5 text-center cursor-pointer"
                @click="currentMenu = 'forgotPassword'"
              >
                Забыли пароль?
              </p>
              <p
                class="text-xs outline-1 colorLink border-b borderLink w-2/5 text-center cursor-pointer"
                @click="showReg = true"
              >
                Зарегистрироваться
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
    <form
      class="flex justify-between"
      v-if="currentMenu == 'forgotPassword'"
      @submit.prevent=""
    >
      <img
        src="/icons/RegistrationMenuImg.png"
        alt=""
        width="300"
        height="500"
      />
      <div
        class="flex justify-center items-center bg-white currentWidth currentHeight relative"
      >
        <ArrowLeft
          class="cursor-pointer absolute currentCoor w-8"
          @click="currentMenu = 'login'"
        />
        <div class="flex flex-col w-full justify-center items-center">
          <div class="flex w-3/4 items-center mb-12">
            <div class="flex justify-between w-full items-center">
              <span class="activeTextHeader text-2xl font-medium"
                >Восстановление пароля
              </span>
              <CloseIcon
                class="w-7 h-6 cursor-pointer"
                @click.stop="closeDialog"
              />
            </div>
          </div>
          <div class="flex flex-col w-3/4 items-center">
            <div
              class="w-full activeTextHeader text-base font-light mb-2"
              ref="emailInputText"
            >
              Адрес электронной почты
            </div>
            <input
              type="email"
              v-model="emailSendCode"
              required
              ref="emailInputSendCode"
              class="w-full border-main border-2 py-3 px-4 rounded-3xl outline-none mb-5"
            />
            <button
              type="submit"
              class="w-full border-main border-2 py-3 px-4 rounded-3xl font-medium items-center text-white bg-green mt-10"
              @click="sendCodeEmail(this.emailSendCode)"
            >
              Восстановить пароль
            </button>
          </div>
        </div>
      </div>
    </form>
    <form
      class="flex justify-between"
      v-if="currentMenu == 'checkRecoverCode'"
      @submit.prevent=""
    >
      <img
        src="/icons/RegistrationMenuImg.png"
        alt=""
        width="300"
        height="500"
      />
      <div
        class="flex justify-center items-center bg-white currentWidth currentHeight relative"
      >
        <ArrowLeft
          class="cursor-pointer absolute currentCoor w-8"
          @click="currentMenu = 'login'"
        />
        <div class="flex flex-col w-full justify-center items-center">
          <div class="flex w-3/4 items-center mb-12">
            <div class="flex justify-between w-full items-center">
              <span class="activeTextHeader text-2xl font-medium"
                >Восстановление пароля
              </span>
              <CloseIcon
                class="w-7 h-6 cursor-pointer"
                @click.stop="closeDialog"
              />
            </div>
          </div>
          <div class="flex flex-col w-3/4 items-center">
            <div
              class="w-full activeTextHeader text-base font-light mb-2"
              ref="emailInputText"
            >
              Код восстановления
            </div>
            <input
              type="text"
              v-model="checkCode"
              required
              ref="checkCode"
              class="w-full border-main border-2 py-3 px-4 rounded-3xl outline-none mb-5"
            />
            <button
              type="submit"
              class="w-full border-main border-2 py-3 px-4 rounded-3xl font-medium items-center text-white bg-green mt-10"
              @click="sendCodeEmail()"
            >
              Проверить код
            </button>
            <p
              class="text-xs outline-1 colorLink border-b borderLink w-full mt-5 text-center cursor-pointer"
            >
              Не пришел код подтверждения? Повторите попытку через
              {{ TimerCount }}
            </p>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { useAuthStore } from "../store/AuthStore";
import { CloseIcon, ArrowLeft } from "@/components/UI";
export default {
  data: () => ({
    showReg: false,
    authStore: useAuthStore(),
    currentMenu: "login",
    emailLog: "",
    passwordLog: "",
    emailSendCode: "",
    checkCode: "",
    TimerCount: 0,
  }),
  methods: {
    closeDialog() {
      this.$emit("update:show", false);
    },
    sendCodeEmail() {
      if (this.emailSendCode != "") {
        this.authStore
          .getRegisterCode({ email: this.emailSendCode, status: "Recover" })
          .then((resp) => {
            if (resp.status == 200) {
              this.currentMenu = "checkRecoverCode";
              this.TimerCount = 30;
            }
          });
      } else {
        console.log("ок");
      }
    },

    validateEmailLog() {
      const emailInput = this.$refs.emailInputLog;
      const emailInputText = this.$refs.emailInputText;
      const passwordInput = this.$refs.passwordInputLog;
      const passwordInputText = this.$refs.passwordInputText;

      if (!this.emailLog) {
        emailInput.classList.add("wrongBorder");
        emailInputText.classList.add("wrongText");
      } else {
        emailInput.classList.remove("wrongBorder");
        emailInputText.classList.remove("wrongText");
      }
      if (!this.passwordLog) {
        passwordInput.classList.add("wrongBorder");
        passwordInputText.classList.add("wrongText");
      } else {
        passwordInput.classList.remove("wrongBorder");
        passwordInputText.classList.remove("wrongText");
      }
    },
    onLogin() {
      this.validateEmailLog();
      // this.currentMenu = "checkRecoverCode";
      // this.TimerCount = 30;
      this.authStore
        .login({
          email: this.emailLog,
          password: this.passwordLog,
        })
        .then((resp) => {
          if (resp.status == 200) {
            location.reload();
          }
        });
    },
  },
  watch: {
    TimerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.TimerCount--;
          }, 1000);
        }
      },
    },
  },

  props: {
    show: { type: Boolean, default: false },
  },
  name: "RegistrationMenu",
  components: { CloseIcon, ArrowLeft },
};
</script>

<style>
.currentCoor {
  top: 21%;
  right: 90%;
}
.colorLink {
  color: #21252880;
}
.borderLink {
  border-color: #21252879;
}
.currentHeight {
  height: 500px;
}
.currentWidth {
  width: 600px;
}
</style>
