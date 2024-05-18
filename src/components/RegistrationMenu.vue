<template>
  <div
    class="flex justify-center items-center flex-column top-0 bottom-0 right-0 left-0 bg_gray fixed z-50"
    v-if="showReg"
  >
    <form @submit.prevent="validateEmailReg" class="flex justify-between">
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
            <div class="w-full activeTextHeader text-base font-light mb-2">
              Адрес электронной почты
            </div>
            <input
              type="text"
              v-model="emailLog"
              ref="emailInputLog"
              class="w-full border-main border-2 py-3 px-4 rounded-3xl outline-none mb-5"
            />
            <div class="w-full activeTextHeader text-base font-light mb-2">
              Пароль
            </div>
            <input
              ref="emailInputLog"
              type="text"
              v-model="emailLog"
              class="w-full border-main border-2 py-3 px-4 rounded-3xl outline-none"
            />
            <button
              type="button"
              class="w-full border-main border-2 py-3 px-4 rounded-3xl font-medium items-center text-white bg-green mt-10"
            >
              Войти
            </button>
            <div class="flex justify-between w-2/3 mt-4">
              <p class="text-xs outline-1 colorLink border-b borderLink w-2/5">
                Забыли пароль?
              </p>
              <p class="text-xs outline-1 colorLink border-b borderLink w-2/5">
                я гей
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  props: {
    showReg: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style></style>
