<template>
  <div class="container">
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
      <div class="text-center mb-5">
        <img src="@/assets/images/timer-stopwatch-svgrepo-com.svg" alt="Image" height="50" class="mb-3">
        <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
        <span class="text-600 font-medium line-height-3">Don't have an account?</span>
        <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
      </div>

      <div>
        <label for="email1" class="block text-900 font-medium mb-2">Email</label>
        <InputText id="email1" type="text" class="w-full mb-3" />

        <label for="password1" class="block text-900 font-medium mb-2">Password</label>
        <InputText id="password1" type="password" class="w-full mb-3" />

        <div class="flex align-items-center justify-content-between mb-6">
          <div class="flex align-items-center">
            <CheckboxComponent id="rememberme1" :binary="true" v-model="checked" class="mr-2"></CheckboxComponent>
            <label for="rememberme1">Remember me</label>
          </div>
          <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
        </div>

        <ButtonComponent label="Sign In" icon="pi pi-user" class="w-full"></ButtonComponent>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterComponent",
  data() {
    return {
      formData : {
        userName: null,
        secondName: null,
        email: null,
        password: null,
      },
    }
  },
  methods: {
    getFormData() {
      console.log(this.formData)
      this.axios
        .post(
          'http://localhost:3000/api/auth/signup',
          {
            name: this.formData.userName,
            second_name: this.formData.secondName,
            email: this.formData.email,
            password: this.formData.password,
          }
        )
        .then(response => console.log(response))
        .catch(e => console.warn(e))
    }
  },
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
}
</style>