<template>
  <div class="authContainer">
    <LoginComponent v-if="isLoginPage" @goToRegister="goToRegister"/>
    <RegisterComponent v-else @goToLogin="goToLogin"/>
  </div>
</template>

<script>
import RegisterComponent from "@/components/auth/RegisterComponent";
import LoginComponent from "@/components/auth/LoginComponent";

export default {
  name: "AuthView",
  components: {
    RegisterComponent,
    LoginComponent
  },
  data() {
    return {
      isLoginPage: true,
    }
  },
  props: {
    isLogin: {
      type: Boolean,
      default: true
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.isLoginPage = this.isLogin
    },
    goToRegister() {
      this.isLoginPage = false
    },
    goToLogin() {
      this.isLoginPage = true
    }
  }
}
</script>

<style scoped>
.authContainer {

}
</style>