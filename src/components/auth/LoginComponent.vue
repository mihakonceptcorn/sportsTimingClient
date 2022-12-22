<template>
  <div class="container">
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-4 relative">
      <ProgressSpinner v-if="loading" aria-label="Loading"></ProgressSpinner>
      <div class="text-center mb-5">
        <img src="@/assets/images/timer-stopwatch-svgrepo-com.svg" alt="Image" height="50" class="mb-3">
        <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
        <span class="text-600 font-medium line-height-3">Don't have an account?</span>
        <a
          class="font-medium no-underline ml-2 text-blue-500 cursor-pointer"
          @click.prevent="$emit('goToRegister')"
        >
          Create today!
        </a>
      </div>

      <form>
        <label for="email" class="block text-900 font-medium mb-2">Email</label>
        <InputText
          id="email"
          type="text"
          class="w-full mb-3"
          autocomplete="false"
          v-model="formData.email"
        />

        <label for="password" class="block text-900 font-medium mb-2">Password</label>
        <InputText
          id="password"
          type="password"
          class="w-full mb-3"
          autocomplete="false"
          v-model="formData.password"
        />

        <div class="flex align-items-center justify-content-between mb-6">
          <div class="flex align-items-center">
            <CheckboxComponent id="rememberme" :binary="true" v-model="checked" class="mr-2"></CheckboxComponent>
            <label for="rememberme">Remember me</label>
          </div>
          <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
        </div>
        <ButtonComponent label="Sign In" icon="pi pi-user" class="w-full" @click.prevent="loginUser()"/>
      </form>
    </div>
  </div>
</template>

<script>
import { apiUrl } from "@/settings/config";

export default {
  name: "LoginComponent",
  data() {
    return {
      loading: false,
      checked: false,
      formData: {
        email: null,
        password: null,
      }
    }
  },
  methods: {
    async loginUser() {
      this.loading = true
      try {
        const response = await this.axios.post(apiUrl + '/auth/signin', this.formData)
        this.loading = false
        if (response.data.status === 200 && response.data.values.token) {
          localStorage.setItem('token', response.data.values.token)
          await this.$router.push({name: 'account'})
        }
      } catch (e) {
        this.loading = false
        console.warn(e)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .field {
    &:last-of-type {
      margin-bottom: 0;
    }
  }
  .p-progress-spinner {
    position: absolute;
    background-color: rgba(0, 0, 0, .2);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
}
</style>